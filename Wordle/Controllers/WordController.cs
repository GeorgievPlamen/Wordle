using Microsoft.AspNetCore.Mvc;
using Wordle.Controllers.Base;

namespace Wordle.Controllers
{
    public class WordController : BaseController
    {
        private readonly ILogger<WordController> _logger;

        public WordController(ILogger<WordController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetWord()
        {
            _logger.LogInformation("testing");
            return Ok("Hello World!");
        }
    }
}