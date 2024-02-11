using Contracts.DTOs;

namespace Contracts
{
    public interface IWordAttempt
    {
        public Task<bool> AddWordAttempt(string userId, string word, bool bulgarian);
        public Task<AttemptsDTO> GetAttempts(string userId);
    }
}