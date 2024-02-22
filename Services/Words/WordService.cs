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

        public WordService(
            WordleDbContext context,
            ILogger<WordService> logger)
        {
            _logger = logger;
            _context = context;
        }
        public async Task<string> GetWord(Language language)
        {
            string? output = null;
            DateTime today = DateTime.Today.ToUniversalTime();
            var wordsToday = _context.WordsOfTheDay
                .Where(x => x.LastPlayed >= today && x.LastPlayed < today.AddDays(1))
                .FirstOrDefault();
            if (wordsToday == null)
            {
                int randomIdEn = new Random().Next(1, _context.WordsEn.Count());
                var resultEn = await _context.WordsEn.Where(x => x.Id == randomIdEn).FirstOrDefaultAsync();
                int randomIdBg = new Random().Next(1, _context.WordsBg.Count());
                var resultBg = await _context.WordsBg.Where(x => x.Id == randomIdBg).FirstOrDefaultAsync();
                if (resultEn == null || resultEn.Value == null || resultBg == null || resultBg.Value == null)
                {
                    _logger.LogError("Word is not found ");
                    throw new ArgumentNullException("Word is not found");
                }
                wordsToday = new WordsOfTheDay
                {
                    LastPlayed = DateTime.Today.ToUniversalTime(),
                    EnWord = resultEn.Value.ToUpper(),
                    BgWord = resultBg.Value.ToUpper()
                };
                await _context.WordsOfTheDay.AddAsync(wordsToday);
                await _context.SaveChangesAsync();
            }

            if (language == Language.English)
            {
                output = wordsToday.EnWord;
            }
            else if (language == Language.Bulgarian)
            {
                output = wordsToday.BgWord;
            }
            if (output == null) throw new ArgumentNullException("Can't get a word from DB or Cache");
            return output;
        }
    }
}