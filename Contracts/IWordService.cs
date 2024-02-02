using Contracts.Params;

namespace Contracts
{
    public interface IWordService
    {
        Task<string> GetWord(Language language);
    }
}