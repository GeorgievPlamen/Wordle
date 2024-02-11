namespace Entities
{
    public class GuessesToday
    {
        public int Id { get; set; }
        public string? UserId { get; set; }
        public int attempt { get; set; }
        public int attemptBg { get; set; }
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