namespace Entities
{
    public class WordsOfTheDay
    {
        public int Id { get; set; }
        public DateTime LastPlayed { get; set; }
        public string? EnWord { get; set; }
        public string? BgWord { get; set; }
    }
}