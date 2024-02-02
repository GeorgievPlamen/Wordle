using Contracts;
using Contracts.Params;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Services.Words
{
    public class WordService : IWordService
    {
        private readonly WordleDbContext _context;
        private readonly ILogger<WordService> _logger;
        public WordService(WordleDbContext context, ILogger<WordService> logger)
        {
            _logger = logger;
            _context = context;
        }
        public async Task<string> GetWord(Language language)
        {
            string word = "";
            int randomId = new Random().Next(1, _context.WordsEn.Count());
            if (language == Language.English)
            {
                var result = await _context.WordsEn.Where(x => x.Id == randomId).FirstOrDefaultAsync();
                if (result == null || result.Value == null)
                {
                    throw new ArgumentNullException(nameof(result));
                }
                word = result.Value;
            }
            if (language == Language.Bulgarian)
            {
                var result = await _context.WordsBg.Where(x => x.Id == randomId).FirstOrDefaultAsync();
                if (result == null || result.Value == null)
                {
                    throw new ArgumentNullException(nameof(result));
                }
                word = result.Value;
            }
            return word;
        }
    }
}