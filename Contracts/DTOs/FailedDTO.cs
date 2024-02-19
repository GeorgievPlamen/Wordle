
namespace Contracts.DTOs
{
    public class FailedDTO
    {
        public char[]? Letters { get; }
        public int[]? Values { get; }
        public string? WordToday { get; }
        public string? WordTodayBg { get; }

        public FailedDTO(char[] letters, int[] values, string? wordToday, string? wordTodayBg)
        {
            Letters = letters;
            Values = values;
            WordToday = wordToday;
            WordTodayBg = wordTodayBg;
        }
    }
}