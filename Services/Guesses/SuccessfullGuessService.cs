using Contracts;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Services.Guesses
{
    public class SuccessfullGuessService : ISuccessfullGuess
    {
        private readonly WordleDbContext _context;
        private readonly ILogger<SuccessfullGuessService> _logger;
        public SuccessfullGuessService(
            WordleDbContext context,
            ILogger<SuccessfullGuessService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<bool> SuccessfullGuess(string userId, int guessAttempt, bool bulgarian)
        {
            GuessesEn? guess = await _context.GuessesEn
                .Where(x => x.UserId == userId)
                .FirstOrDefaultAsync();

            if (guess == null)
            {
                var guessTemp = new GuessesEn { UserId = userId };
                if (bulgarian)
                {
                    switch (guessAttempt)
                    {
                        case 1:
                            guessTemp.FirstBg = 1;
                            break;
                        case 2:
                            guessTemp.SecondBg = 1;
                            break;
                        case 3:
                            guessTemp.ThirdBg = 1;
                            break;
                        case 4:
                            guessTemp.FourthBg = 1;
                            break;
                        case 5:
                            guessTemp.FifthBg = 1;
                            break;
                        case 6:
                            guessTemp.SixthBg = 1;
                            break;
                    }
                }
                else
                {
                    switch (guessAttempt)
                    {
                        case 1:
                            guessTemp.First = 1;
                            break;
                        case 2:
                            guessTemp.Second = 1;
                            break;
                        case 3:
                            guessTemp.Third = 1;
                            break;
                        case 4:
                            guessTemp.Fourth = 1;
                            break;
                        case 5:
                            guessTemp.Fifth = 1;
                            break;
                        case 6:
                            guessTemp.Sixth = 1;
                            break;
                    }
                }


                _context.GuessesEn.Add(guessTemp);
                await _context.SaveChangesAsync();
            }


            if (guess == null)
            {
                _logger.LogWarning("Couldn't find userId on successfull guess");
                return false;
            }

            if (bulgarian)
            {
                switch (guessAttempt)
                {
                    case 1:
                        guess.FirstBg++;
                        await _context.SaveChangesAsync();
                        break;
                    case 2:
                        guess.SecondBg++;
                        await _context.SaveChangesAsync();
                        break;
                    case 3:
                        guess.ThirdBg++;
                        await _context.SaveChangesAsync();
                        break;
                    case 4:
                        guess.FourthBg++;
                        await _context.SaveChangesAsync();
                        break;
                    case 5:
                        guess.FifthBg++;
                        await _context.SaveChangesAsync();
                        break;
                    case 6:
                        guess.SixthBg++;
                        await _context.SaveChangesAsync();
                        break;
                }
            }
            else
            {
                switch (guessAttempt)
                {
                    case 1:
                        guess.First++;
                        await _context.SaveChangesAsync();
                        break;
                    case 2:
                        guess.Second++;
                        await _context.SaveChangesAsync();
                        break;
                    case 3:
                        guess.Third++;
                        await _context.SaveChangesAsync();
                        break;
                    case 4:
                        guess.Fourth++;
                        await _context.SaveChangesAsync();
                        break;
                    case 5:
                        guess.Fifth++;
                        await _context.SaveChangesAsync();
                        break;
                    case 6:
                        guess.Sixth++;
                        await _context.SaveChangesAsync();
                        break;
                }
            }

            return true;
        }
    }
}