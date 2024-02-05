using System.Text;
using Contracts;
using Contracts.DTOs;
using Contracts.Params;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Wordle.Controllers.Base;

namespace Wordle.Controllers
{
    public class WordController : BaseController
    {
        private readonly ILogger<WordController> _logger;
        private readonly IWordService _wordService;
        private readonly IWordChecker _wordChecker;
        private readonly IWordValid _wordValid;
        private readonly ISuccessfullGuess _successfullGuess;

        public WordController(
            ILogger<WordController> logger,
            IWordService wordService,
            IWordChecker wordChecker,
            IWordValid wordValid,
            ISuccessfullGuess successfullGuess)
        {
            _wordService = wordService;
            _wordChecker = wordChecker;
            _wordValid = wordValid;
            _logger = logger;
            _successfullGuess = successfullGuess;
        }

        [HttpGet("En")]
        public async Task<IActionResult> GetWord()
        {
            string word = await _wordService.GetWord(Language.English);
            return Ok(word);
        }

        [HttpGet("Bg")]
        public async Task<IActionResult> GetWordBg()
        {
            string word = await _wordService.GetWord(Language.Bulgarian);
            return Ok(word);
        }

        [HttpGet("En/{word}")]
        public async Task<IActionResult> CheckWord(string word)
        {
            if (!_wordValid.IsValid(word.ToUpper(), false))
            {
                return BadRequest("Word is not valid");
            }

            if (Request.Cookies.TryGetValue("guesses", out string? guesses))
            {
                if (Convert.ToInt32(guesses) == 6)
                {
                    return BadRequest("Already at max guesses");
                }
            }

            if (Request.Cookies.ContainsKey("guessedCorrectly"))
            {
                return BadRequest("You have already guessed this word");
            }

            string wordToCheck = await _wordService.GetWord(Language.English);
            var result = _wordChecker.CheckWord(wordToCheck, word.ToUpper());

            //Prep for cookies
            string usedWord = "";

            usedWord = PrepWord(result, usedWord);

            HandleGuessesCookie(guesses, usedWord);

            //Correct
            if (result != null && result.Values != null &&
            result.Values.All(x => x == 0))
            {
                await HandleCorrect(guesses, false);
                return Ok();
            }

            return Ok(result);
        }

        [HttpGet("Bg/{word}")]
        public async Task<IActionResult> CheckWordBg(string word)
        {
            if (!_wordValid.IsValid(word, true))
            {
                return BadRequest("Word is not valid");
            }

            if (Request.Cookies.TryGetValue("guessesBg", out string? guesses))
            {
                if (Convert.ToInt32(guesses) == 6)
                {
                    return BadRequest("Already at max guesses");
                }
            }

            if (Request.Cookies.ContainsKey("guessedCorrectlyBg"))
            {
                return BadRequest("You have already guessed this word");
            }

            string wordToCheck = await _wordService.GetWord(Language.Bulgarian);
            var result = _wordChecker.CheckWord(wordToCheck, word.ToUpper());

            string usedWord = "";

            usedWord = PrepWord(result, usedWord);

            HandleGuessesCookie(guesses, usedWord, true);

            if (result != null && result.Values != null &&
            result.Values.All(x => x == 0))
            {
                await HandleCorrect(guesses, true);
                return Ok();
            }

            return Ok(result);
        }

        private async Task HandleCorrect(string? guesses, bool bulgarian)
        {
            if (!Request.Cookies.TryGetValue("userId", out string? userId))
            {
                userId = Guid.NewGuid().ToString();
                Response.Cookies.Append("userId", userId, new CookieOptions { Expires = DateTime.Now.AddDays(30) });
            }

            int attempt = Convert.ToInt32(guesses) + 1;

            if (bulgarian)
            {
                await _successfullGuess.SuccessfullGuess(userId, attempt, true);
                Response.Cookies.Append("guessedCorrectlyBg", "yes", new CookieOptions { Expires = DateTime.Now.AddSeconds(30) });
            }
            else
            {
                await _successfullGuess.SuccessfullGuess(userId, attempt, false);
                Response.Cookies.Append("guessedCorrectly", "yes", new CookieOptions { Expires = DateTime.Now.AddSeconds(30) });
            }
        }
        private static string PrepWord(WordDTO? result, string usedWord)
        {
            if (result != null && result.Letters != null)
            {
                foreach (char c in result.Letters)
                {
                    usedWord += c;
                }
            }

            return usedWord;
        }
        private void HandleGuessesCookie(string? guesses, string? usedWord, bool Bulgarian = false)
        {
            var cookieOpt = new CookieOptions { Expires = DateTime.Today.AddDays(1) };
            if (!Request.Cookies.ContainsKey("guesses") || !Request.Cookies.ContainsKey("guessesBg"))
            {
                int guessTries = 0;
                Response.Cookies.Append("guesses", guessTries.ToString(), cookieOpt);
                Response.Cookies.Append("guessesBg", guessTries.ToString(), cookieOpt);
            }
            if (Request.Cookies.TryGetValue("usedWords", out string? usedWords))
            {
                if (!Bulgarian)
                {
                    Response.Cookies.Append("usedWords", usedWords + ',' + usedWord, cookieOpt);
                }
                else
                {
                    Response.Cookies.Append("usedWordsBg", usedWords + ',' + usedWord, cookieOpt);
                }
            }
            else
            {
                if (!Bulgarian)
                {
                    Response.Cookies.Append("usedWords", usedWord!, cookieOpt);
                }
                else
                {
                    Response.Cookies.Append("usedWordsBg", usedWord!, cookieOpt);
                }
            }
            int currentGuess = Convert.ToInt32(guesses);
            currentGuess++;
            if (!Bulgarian)
            {
                Response.Cookies.Delete("guesses");
                Response.Cookies.Append("guesses", currentGuess.ToString(), cookieOpt);
            }
            else
            {
                Response.Cookies.Delete("guessesBg");
                Response.Cookies.Append("guessesBg", currentGuess.ToString(), cookieOpt);
            }
        }
    }
}