namespace Contracts
{
    public interface IWordValid
    {
        public Task<bool> IsValid(string word, bool bulgarian);
    }
}