using Contracts;
using Contracts.Params;
using Microsoft.AspNetCore.Mvc;
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

        [HttpGet("Check/{word}")]
        public async Task<IActionResult> CheckWord(string word)
        {
            string wordToCheck = await _wordService.GetWord(Language.English);
            var result = _wordChecker.CheckWord(wordToCheck, word.ToUpper());
            return Ok(result);
        }
    }
}