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

        public WordController(
            ILogger<WordController> logger,
            IWordService wordService)
        {
            _wordService = wordService;
            _logger = logger;
        }

        [HttpGet]
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
    }
}