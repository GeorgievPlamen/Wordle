using System.Text;
using Contracts;
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

        public WordController(
            ILogger<WordController> logger,
            IWordService wordService,
            IWordChecker wordChecker)
        {
            _wordService = wordService;
            _wordChecker = wordChecker;
            _logger = logger;
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
            if (Request.Cookies.TryGetValue("guesses", out string? guesses))
            {
                if (Convert.ToInt32(guesses) == 6)
                {
                    return BadRequest("Already at max guesses");
                }
            }

            string wordToCheck = await _wordService.GetWord(Language.English);
            var result = _wordChecker.CheckWord(wordToCheck, word.ToUpper());

            string usedWord = "";

            if (result != null && result.Letters != null)
            {
                foreach (char c in result.Letters)
                {
                    usedWord += c;
                }
            }

            HandleGuessesCookie(guesses, usedWord);
            return Ok(result);
        }

        [HttpGet("Bg/{word}")]
        public async Task<IActionResult> CheckWordBg(string word)
        {
            if (Request.Cookies.TryGetValue("guessesBg", out string? guesses))
            {
                if (Convert.ToInt32(guesses) == 6)
                {
                    return BadRequest("Already at max guesses");
                }
            }

            string wordToCheck = await _wordService.GetWord(Language.Bulgarian);
            var result = _wordChecker.CheckWord(wordToCheck, word.ToUpper());

            string usedWord = "";

            if (result != null && result.Letters != null)
            {
                foreach (char c in result.Letters)
                {
                    usedWord += c;
                }
            }

            HandleGuessesCookie(guesses, usedWord, true);
            return Ok(result);
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