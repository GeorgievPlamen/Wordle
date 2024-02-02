using Contracts;
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
        public Dictionary<char, CheckResult> CheckWord(string toCheckAgainst, string input)
        {
            Dictionary<char, CheckResult> result = new();

            for (int i = 0; i < toCheckAgainst.Length; i++)
            {
                if (input[i] == toCheckAgainst[i])
                {
                    result[input[i]] = CheckResult.Correct;
                }
                else if (toCheckAgainst.Contains(input[i]))
                {
                    result[input[i]] = CheckResult.Included;
                }
                else
                {
                    result[input[i]] = CheckResult.Incorrect;
                }
            }

            return result;
        }
    }
}