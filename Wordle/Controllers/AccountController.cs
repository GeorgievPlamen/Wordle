using Contracts;
using Contracts.DTOs.Identity;
using Entities.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Wordle.Controllers.Base;

namespace Wordle.Controllers
{
    public class AccountController : BaseController
    {
        private readonly UserManager<User> _userManager;
        private readonly ITokenJWT _tokenService;
        public AccountController(
            UserManager<User> userManager,
            ITokenJWT tokenService)
        {
            _tokenService = tokenService;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO)
        {
            Thread.Sleep(500);
            if (loginDTO == null ||
                loginDTO.Username == null ||
                loginDTO.Password == null)
            {
                throw new ArgumentNullException(nameof(loginDTO));
            }

            var user = await _userManager.FindByNameAsync(loginDTO.Username);

            if (user == null ||
                !await _userManager.CheckPasswordAsync(user, loginDTO.Password))
            {
                return Unauthorized();
            }

            return new UserDTO
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user)
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDTO registerDTO)
        {
            if (registerDTO.Password == null)
            {
                throw new ArgumentNullException(nameof(registerDTO));
            }
            var user = new User
            {
                UserName = registerDTO.Username,
                Email = registerDTO.Email
            };

            var result = await _userManager.CreateAsync(user, registerDTO.Password);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }

                return ValidationProblem();
            }

            await _userManager.AddToRoleAsync(user, "Member");

            return Ok();
        }

        [Authorize]
        [HttpGet("currentUser")]
        public async Task<ActionResult<UserDTO>> GetCurrentUser()
        {
            var user = await _userManager.FindByNameAsync(
                User.Identity?.Name ??
                throw new ArgumentNullException(nameof(User)));

            if (user == null)
                throw new ArgumentNullException(nameof(user));

            return new UserDTO
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user)
            };
        }
    }
}