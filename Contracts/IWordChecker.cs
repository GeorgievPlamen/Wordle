using Contracts.Params;

namespace Contracts
{
    public interface IWordChecker
    {
        Dictionary<char, CheckResult> CheckWord(string toCheckAgainst, string input);
    }
}