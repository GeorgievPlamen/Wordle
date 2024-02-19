namespace Contracts.DTOs
{
    public class WordDTO
    {
        public char[]? Letters { get; }
        public int[]? Values { get; }

        public WordDTO(char[] letters, int[] values)
        {
            Letters = letters;
            Values = values;
        }
    }
}