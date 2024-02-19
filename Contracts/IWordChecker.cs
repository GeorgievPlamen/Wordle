using Contracts.DTOs;

namespace Contracts
{
    public interface IWordChecker
    {
        WordDTO CheckWord(string toCheckAgainst, string input);
    }
}