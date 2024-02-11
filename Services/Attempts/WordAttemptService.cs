using Contracts;
using Contracts.DTOs;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Services.Attempts
{
    public class WordAttemptService : IWordAttempt
    {
        private readonly ILogger<WordAttemptService> _logger;
        private readonly WordleDbContext _context;
        public WordAttemptService(
            ILogger<WordAttemptService> logger,
            WordleDbContext context)
        {
            _context = context;
            _logger = logger;

        }
        public async Task<bool> AddWordAttempt(string userId, string word, bool bulgarian)
        {
            GuessesToday guess = await _context.GuessesToday
                .FirstOrDefaultAsync(x => x.UserId == userId)
                ?? new GuessesToday { UserId = userId };

            if (bulgarian)
            {
                guess.attemptBg++;
                switch (guess.attemptBg)
                {
                    case (1):
                        guess.FirstGuessBg = word;
                        break;
                    case (2):
                        guess.SecondGuessBg = word;
                        break;
                    case (3):
                        guess.ThirdGuessBg = word;
                        break;
                    case (4):
                        guess.FourthGuessBg = word;
                        break;
                    case (5):
                        guess.FifthGuessBg = word;
                        break;
                    case (6):
                        guess.SixthGuessBg = word;
                        break;
                }
            }
            else
            {
                guess.attempt++;
                switch (guess.attempt)
                {
                    case (1):
                        guess.FirstGuess = word;
                        break;
                    case (2):
                        guess.SecondGuess = word;
                        break;
                    case (3):
                        guess.ThirdGuess = word;
                        break;
                    case (4):
                        guess.FourthGuess = word;
                        break;
                    case (5):
                        guess.FifthGuess = word;
                        break;
                    case (6):
                        guess.SixthGuess = word;
                        break;
                }
            }
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<AttemptsDTO> GetAttempts(string userId)
        {
            var attempts = new AttemptsDTO();

            GuessesToday userAttempts = await _context.GuessesToday
                .FirstOrDefaultAsync(x => x.UserId == userId)
                ?? new GuessesToday { UserId = userId };
            MapAttempts(attempts, userAttempts);

            return attempts;
        }

        private static void MapAttempts(AttemptsDTO attempts, GuessesToday userAttempts)
        {
            attempts.Attempt = userAttempts.attempt;
            attempts.AttemptBg = userAttempts.attemptBg;
            attempts.FirstGuess = userAttempts.FirstGuess;
            attempts.SecondGuess = userAttempts.SecondGuess;
            attempts.ThirdGuess = userAttempts.ThirdGuess;
            attempts.FirstGuess = userAttempts.FourthGuess;
            attempts.FifthGuess = userAttempts.FifthGuess;
            attempts.SixthGuess = userAttempts.SixthGuess;
            attempts.FirstGuessBg = userAttempts.FirstGuessBg;
            attempts.SecondGuessBg = userAttempts.SecondGuessBg;
            attempts.ThirdGuessBg = userAttempts.ThirdGuessBg;
            attempts.FirstGuessBg = userAttempts.FourthGuessBg;
            attempts.FifthGuessBg = userAttempts.FifthGuessBg;
            attempts.SixthGuessBg = userAttempts.SixthGuessBg;
        }
    }
}