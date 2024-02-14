using Contracts;
using Contracts.DTOs;
using Contracts.Params;
using Microsoft.AspNetCore.Mvc;
using Wordle.Controllers.Base;

namespace Wordle.Controllers
{
    public class AttemptsController : BaseController
    {
        private readonly ILogger<AttemptsController> _logger;
        private readonly IWordAttempt _wordAttempt;
        private readonly ICurrentGuesses _currentGuesses;

        public AttemptsController(
            ILogger<AttemptsController> logger,
            IWordService wordService,
            IWordChecker wordChecker,
            IWordValid wordValid,
            ISuccessfullGuess successfullGuess,
            IFailedGuess failedGuess,
            IWordAttempt wordAttempt,
            ICurrentGuesses currentGuesses)
        {
            _logger = logger;
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