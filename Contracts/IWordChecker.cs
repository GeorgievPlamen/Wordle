using Contracts.DTOs;
using Contracts.Params;

namespace Contracts
{
    public interface IWordChecker
    {
        WordDTO CheckWord(string toCheckAgainst, string input);
    }
}