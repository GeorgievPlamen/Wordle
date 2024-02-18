using Entities;

namespace Contracts.DTOs
{
    public class AttemptsDTO
    {
        public int Attempt { get; set; }
        public int AttemptBg { get; set; }
        public string? FirstGuess { get; set; }
        public string? SecondGuess { get; set; }
        public string? ThirdGuess { get; set; }
        public string? FourthGuess { get; set; }
        public string? FifthGuess { get; set; }
        public string? SixthGuess { get; set; }
        public string? FirstGuessBg { get; set; }
        public string? SecondGuessBg { get; set; }
        public string? ThirdGuessBg { get; set; }
        public string? FourthGuessBg { get; set; }
        public string? FifthGuessBg { get; set; }
        public string? SixthGuessBg { get; set; }


    }

    public static class AttemptsDTOExtensions
    {
        public static void MapAttempts(this AttemptsDTO attempts, GuessesToday userAttempts)
        {
            attempts.Attempt = userAttempts.attempt;
            attempts.AttemptBg = userAttempts.attemptBg;
            attempts.FirstGuess = userAttempts.FirstGuess;
            attempts.SecondGuess = userAttempts.SecondGuess;
            attempts.ThirdGuess = userAttempts.ThirdGuess;
            attempts.FourthGuess = userAttempts.FourthGuess;
            attempts.FifthGuess = userAttempts.FifthGuess;
            attempts.SixthGuess = userAttempts.SixthGuess;
            attempts.FirstGuessBg = userAttempts.FirstGuessBg;
            attempts.SecondGuessBg = userAttempts.SecondGuessBg;
            attempts.ThirdGuessBg = userAttempts.ThirdGuessBg;
            attempts.FourthGuessBg = userAttempts.FourthGuessBg;
            attempts.FifthGuessBg = userAttempts.FifthGuessBg;
            attempts.SixthGuessBg = userAttempts.SixthGuessBg;
        }
    }
}