using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Contracts.DTOs.Identity
{
    public class LoginDTO
    {
        [Required, MinLength(4)]
        public string? Username { get; set; }
        [Required, MinLength(6)]
        public string? Password { get; set; }
    }
}