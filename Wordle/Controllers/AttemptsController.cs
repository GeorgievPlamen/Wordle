using Contracts;
using Microsoft.AspNetCore.Mvc;
using Wordle.Controllers.Base;

namespace Wordle.Controllers
{
    public class AttemptsController : BaseController
    {
        private readonly IWordAttempt _wordAttempt;
        private readonly ICurrentGuesses _currentGuesses;

        public AttemptsController(
            IWordAttempt wordAttempt,
            ICurrentGuesses currentGuesses)
        {
            _wordAttempt = wordAttempt;
            _currentGuesses = currentGuesses;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> Init(string? userId)
        {
            if (userId == null) return Ok("Haven't played yet.");
            return Ok(await _wordAttempt.GetAttempts(userId));
        }
        [HttpGet("userguesses/{userId}")]
        public async Task<IActionResult> UserGuesses(string? userId)
        {
            if (userId == null) return Ok("No logged guesses yet.");
            return Ok(await _currentGuesses.UserGuesses(userId));
        }
    }
}