using Contracts.DTOs.Identity;
using Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Wordle.Controllers.Base;

namespace Wordle.Controllers
{
    public class AccountController : BaseController
    {
        private readonly UserManager<User> _userManager;
        public AccountController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(LoginDTO loginDTO)
        {
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

            return user;
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
    }
}