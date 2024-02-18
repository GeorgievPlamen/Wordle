using System.ComponentModel.DataAnnotations;

namespace Contracts.DTOs.Identity
{
    public class RegisterDTO : LoginDTO
    {
        [Required, EmailAddress]
        public string? Email { get; set; }
    }
}