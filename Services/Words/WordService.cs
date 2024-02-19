using Contracts;
using Contracts.Params;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace Services.Words
{
    public class WordService : IWordService
    {
        private readonly WordleDbContext _context;
        private readonly ILogger<WordService> _logger;
        private readonly IMemoryCache _cache;

        public WordService(
            WordleDbContext context,
            ILogger<WordService> logger,
            IMemoryCache cache)
        {
            _logger = logger;
            _cache = cache;
            _context = context;
        }
        public async Task<string> GetWord(Language language)
        {
            string? output = null;
            if (language == Language.English)
            {
                output = _cache.Get<string>("WordEn");
                if (output == null)
                {
                    int randomId = new Random().Next(1, _context.WordsEn.Count());
                    var result = await _context.WordsEn.Where(x => x.Id == randomId).FirstOrDefaultAsync();
                    if (result == null || result.Value == null)
                    {
                        _logger.LogError("Word is not found ");
                        throw new ArgumentNullException(nameof(result));
                    }
                    output = result.Value.ToUpper();
                    var endOfDay = DateTime.Today.AddDays(1);
                    _cache.Set("WordEn", output, endOfDay);
                }
            }
            else if (language == Language.Bulgarian)
            {
                output = _cache.Get<string>("WordBg");
                if (output == null)
                {
                    int randomId = new Random().Next(1, _context.WordsBg.Count());
                    var result = await _context.WordsBg.Where(x => x.Id == randomId).FirstOrDefaultAsync();
                    if (result == null || result.Value == null)
                    {
                        _logger.LogError("Word is not found ");
                        throw new ArgumentNullException(nameof(result));
                    }
                    output = result.Value;
                    var endOfDay = DateTime.Today.AddDays(1);
                    _cache.Set("WordBg", output, endOfDay);
                }
            }
            if (output == null) throw new ArgumentNullException("Can't get a word from DB or Cache");
            return output;
        }
    }
}