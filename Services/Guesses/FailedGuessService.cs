using Contracts;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Services.Guesses
{
    public class FailedGuessService : IFailedGuess
    {
        private readonly WordleDbContext _context;
        private readonly ILogger<SuccessfullGuessService> _logger;
        public FailedGuessService(
            WordleDbContext context,
            ILogger<SuccessfullGuessService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<bool> FailedGuess(string userId, bool bulgarian)
        {
            GuessesEn? guess = await _context.GuessesEn
                .Where(x => x.UserId == userId)
                .FirstOrDefaultAsync();

            if (guess == null)
            {
                GuessesEn temp = new GuessesEn { UserId = userId };
                if (bulgarian)
                {
                    temp.FailedBg++;
                }
                else
                {
                    temp.FailedEn++;
                }

                await _context.GuessesEn.AddAsync(temp);
            }
            else
            {
                if (bulgarian)
                { guess.FailedBg++; }
                else guess.FailedEn++;
            }

            await _context.SaveChangesAsync();

            return true;
        }
    }
}
