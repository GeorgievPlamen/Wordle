using Contracts;
using Contracts.DTOs;
using Contracts.Params;
using Microsoft.AspNetCore.Mvc;
using Wordle.Controllers.Base;

namespace Wordle.Controllers
{
    public class WordController : BaseController
    {
        private readonly IWordService _wordService;
        private readonly IWordChecker _wordChecker;
        private readonly IWordValid _wordValid;
        private readonly ISuccessfullGuess _successfullGuess;
        private readonly IFailedGuess _failedGuess;
        private readonly IWordAttempt _wordAttempt;

        public WordController(
            IWordService wordService,
            IWordChecker wordChecker,
            IWordValid wordValid,
            ISuccessfullGuess successfullGuess,
            IFailedGuess failedGuess,
            IWordAttempt wordAttempt)
        {
            _wordService = wordService;
            _wordChecker = wordChecker;
            _wordValid = wordValid;
            _successfullGuess = successfullGuess;
            _failedGuess = failedGuess;
            _wordAttempt = wordAttempt;
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
            var userId = User.Identity?.Name;
            if (string.IsNullOrEmpty(userId))
            {
                if (Request.Cookies.TryGetValue("userId", out string? cookieUserId))
                {
                    userId = cookieUserId;
                }
                else
                {
                    userId = CreateUserIdCookie();
                }
            }


            //Is word in list?
            if (!await _wordValid.IsValid(word.ToLower(), false))
            {
                return BadRequest("Word is not valid");
            }

            //check if word is correct
            string wordToCheck = await _wordService.GetWord(Language.English);
            var result = _wordChecker.CheckWord(wordToCheck, word.ToUpper());

            string usedWord = "";

            usedWord = PrepWord(result, usedWord);

            var attempt = await _wordAttempt.AddWordAttempt(userId, usedWord, false);
            var attemptDto = await _wordAttempt.GetAttempts(userId);

            //Failed
            if (attemptDto.Attempt >= 6)
            {
                await _failedGuess.FailedGuess(userId, false);
                return Ok(result);
            }

            //Correct
            if (result != null && result.Values != null &&
            result.Values.All(x => x == 0))
            {
                await HandleCorrect(attemptDto, false, userId);
                return Ok(result);
            }

            return Ok(result);
        }



        [HttpGet("Bg/{word}")]
        public async Task<IActionResult> CheckWordBg(string word)
        {
            if (!Request.Cookies.TryGetValue("userId", out string? userId))
            {
                userId = CreateUserIdCookie();
            }

            if (!await _wordValid.IsValid(word, true))
            {
                return BadRequest("Word is not valid");
            }
            string wordToCheck = await _wordService.GetWord(Language.Bulgarian);
            var result = _wordChecker.CheckWord(wordToCheck, word.ToUpper());

            string usedWord = "";

            usedWord = PrepWord(result, usedWord);

            await _wordAttempt.AddWordAttempt(userId, usedWord, true);
            var attemptDto = await _wordAttempt.GetAttempts(userId);

            //Handle failure
            if (attemptDto.AttemptBg >= 6)
            {
                await _failedGuess.FailedGuess(userId, true);
                return Ok(result);
            }

            //Handle Correct
            if (result != null && result.Values != null &&
            result.Values.All(x => x == 0))
            {
                await HandleCorrect(attemptDto, true, userId);
                return Ok(result);
            }

            return Ok(result);
        }

        private string CreateUserIdCookie()
        {
            string? userId = Guid.NewGuid().ToString();
            Response.Cookies.Append("userId", userId, new CookieOptions { Expires = DateTime.Now.AddDays(30) });
            return userId;
        }

        private async Task HandleCorrect(AttemptsDTO attempt, bool bulgarian, string userId)
        {
            if (bulgarian)
            {
                await _successfullGuess.SuccessfullGuess(userId, attempt.AttemptBg, true);
            }
            else
            {
                await _successfullGuess.SuccessfullGuess(userId, attempt.Attempt, false);
            }
        }
        private static string PrepWord(WordDTO? result, string usedWord)
        {
            if (result != null && result.Letters != null && result.Values != null)
            {
                foreach (char c in result.Letters)
                {
                    usedWord += c;
                }
                usedWord += ',';
                foreach (var n in result.Values)
                {
                    usedWord += n.ToString();
                }
            }

            return usedWord;
        }
    }
}