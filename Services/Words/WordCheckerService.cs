using Contracts;
using Contracts.DTOs;
using Contracts.Params;
using Microsoft.Extensions.Logging;

namespace Services.Words
{
    public class WordCheckerService : IWordChecker
    {
        private readonly ILogger<WordCheckerService> _logger;
        public WordCheckerService(ILogger<WordCheckerService> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Compares words and returns dictionary with the letters
        /// </summary>
        /// <param name="toCheckAgainst"></param>
        /// <param name="input"></param>
        /// <returns>Char Dictionary with Enum values - 0 is Corrrect, 1 is Included, 2 is Incorrect</returns>
        public WordDTO CheckWord(string toCheckAgainst, string input)
        {
            char[] letters = new char[5];
            int[] values = new int[5];
            for (int i = 0; i < toCheckAgainst.Length; i++)
            {
                letters[i] = input[i];
                if (input[i] == toCheckAgainst[i])
                {
                    values[i] = Convert.ToInt32(CheckResult.Correct);
                }
                else if (toCheckAgainst.Contains(input[i]))
                {
                    values[i] = Convert.ToInt32(CheckResult.Included);
                }
                else
                {
                    values[i] = Convert.ToInt32(CheckResult.Incorrect);
                }
            }
            var result = new WordDTO(letters, values);

            return result;
        }
    }
}