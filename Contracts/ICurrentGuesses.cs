using Contracts.DTOs;

namespace Contracts
{
    public interface ICurrentGuesses
    {
        public Task<GuessesDTO> UserGuesses(string userId);
    }
}