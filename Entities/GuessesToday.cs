namespace Entities
{
    public class GuessesToday
    {
        public int Id { get; set; }
        public string? UserId { get; set; }
        public DateTime LastPlayed { get; set; }
        public int Attempt { get; set; }
        public int AttemptBg { get; set; }
        public bool Completed { get; set; }
        public bool CompletedBg { get; set; }
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
}