namespace Contracts
{
    public interface ISuccessfullGuess
    {
        public Task<bool> SuccessfullGuess(string userId, int guessAttempt, bool bulgarian);
    }
}