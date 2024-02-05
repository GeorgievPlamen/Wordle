using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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