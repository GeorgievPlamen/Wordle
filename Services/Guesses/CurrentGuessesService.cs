using Contracts;
using Contracts.DTOs;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Services.Guesses
{
    public class CurrentGuessesService : ICurrentGuesses
    {
        private readonly ILogger<CurrentGuessesService> _logger;
        private readonly WordleDbContext _context;
        public CurrentGuessesService(
            WordleDbContext context,
            ILogger<CurrentGuessesService> logger)
        {
            _context = context;
            _logger = logger;

        }
        public async Task<GuessesDTO> UserGuesses(string userId)
        {
            GuessesDTO result = new();

            GuessesEn? guessesEn = await _context.GuessesEn
                .Where(x => x.UserId == userId)
                .FirstOrDefaultAsync();

            if (guessesEn == null)
            {
                _logger.LogInformation("User has no guesses added yet.");
                return result;
            }

            result.MapGuesses(guessesEn);

            return result;
        }
    }
}