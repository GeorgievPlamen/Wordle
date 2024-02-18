using Entities.Identity;

namespace Contracts
{
    public interface ITokenJWT
    {
        public Task<string> GenerateToken(User user);
    }
}