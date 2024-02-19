namespace Contracts
{
    public interface IFailedGuess
    {
        public Task<bool> FailedGuess(string userId, bool bulgarian);
    }
}