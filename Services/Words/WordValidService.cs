using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Contracts;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Services.Words
{
    public class WordValidService : IWordValid
    {
        private readonly WordleDbContext _context;
        private readonly ILogger<WordValidService> _logger;
        public WordValidService(
            WordleDbContext context,
            ILogger<WordValidService> logger)
        {
            _logger = logger;
            _context = context;
        }
        public async Task<bool> IsValid(string word, bool bulgarian)
        {
            if (!bulgarian)
            {
                return await _context.WordsEn.AnyAsync(x => x.Value == word);
            }
            else if (bulgarian)
            {
                return await _context.WordsBg.AnyAsync(x => x.Value == word.ToUpper());
            }

            _logger.LogWarning("Word validation service failed");
            return false;
        }
    }
}