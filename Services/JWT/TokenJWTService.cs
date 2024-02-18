using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Contracts;
using Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Services.JWT
{
    public class TokenJWTService : ITokenJWT
    {
        private readonly IConfiguration _config;
        private readonly UserManager<User> _userManager;
        public TokenJWTService(
            UserManager<User> userManager,
            IConfiguration config)
        {
            _userManager = userManager;
            _config = config;
        }

        public async Task<string> GenerateToken(User user)
        {
            if (user == null ||
                user.UserName == null ||
                user.Email == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.UserName),
            };

            var roles = await _userManager.GetRolesAsync(user);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var tokenKey = _config["JWTSettings:TokenKey"];

            if (tokenKey == null)
            {
                throw new ArgumentNullException(nameof(tokenKey));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var tokenOptions = new JwtSecurityToken(
                issuer: null,
                audience: null,
                claims: claims,
                expires: DateTime.Now.AddDays(7),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        }
    }
}