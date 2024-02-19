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
            GuessesToday guess;
            GuessesToday? currentUser = await _context.GuessesToday
                .FirstOrDefaultAsync(x => x.UserId == userId);
            if (currentUser == null)
            {
                guess = new GuessesToday
                {
                    UserId = userId,
                };
                await _context.AddAsync(guess);
            }
            else
            {
                guess = currentUser;
            }

            guess.LastPlayed = DateTime.Today.ToUniversalTime();

            if (bulgarian)
            {
                if (guess.AttemptBg >= 6)
                {
                    return false;
                }
                guess.AttemptBg++;
                switch (guess.AttemptBg)
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
                if (guess.AttemptBg >= 6)
                {
                    return false;
                }
                guess.Attempt++;
                switch (guess.Attempt)
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

            //Clear Todays attempts
            if (userAttempts.LastPlayed != DateTime.Today.ToUniversalTime())
            {
                userAttempts.Attempt = 0;
                userAttempts.AttemptBg = 0;
                userAttempts.Completed = false;
                userAttempts.CompletedBg = false;
                userAttempts.FirstGuess = null;
                userAttempts.SecondGuess = null;
                userAttempts.ThirdGuess = null;
                userAttempts.FourthGuess = null;
                userAttempts.FifthGuess = null;
                userAttempts.SixthGuess = null;
                userAttempts.FirstGuessBg = null;
                userAttempts.SecondGuessBg = null;
                userAttempts.ThirdGuessBg = null;
                userAttempts.FourthGuessBg = null;
                userAttempts.FifthGuessBg = null;
                userAttempts.SixthGuessBg = null;
                await _context.SaveChangesAsync();
            }

            attempts.MapAttempts(userAttempts);

            return attempts;
        }
    }
}