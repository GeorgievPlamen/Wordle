using System.Text;
using Contracts;
using Entities;
using Entities.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Services.Attempts;
using Services.Guesses;
using Services.JWT;
using Services.Words;

namespace Wordle.Extensions
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddServices(
            this IServiceCollection services,
            IConfiguration config)
        {
            services.AddControllers();
            services.AddSwaggerGen();
            services.AddScoped<IWordService, WordService>();
            services.AddScoped<IWordChecker, WordCheckerService>();
            services.AddScoped<IWordValid, WordValidService>();
            services.AddScoped<ISuccessfullGuess, SuccessfullGuessService>();
            services.AddScoped<IFailedGuess, FailedGuessService>();
            services.AddScoped<ICurrentGuesses, CurrentGuessesService>();
            services.AddScoped<IWordAttempt, WordAttemptService>();
            services.AddScoped<ITokenJWT, TokenJWTService>();
            services.AddMemoryCache();
            services.AddIdentityCore<User>(opt =>
            {
                opt.User.RequireUniqueEmail = true;
            })
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<WordleDbContext>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(opt =>
                {
                    opt.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(
                                config["TokenKey"] ??
                                throw new ArgumentNullException("No signing key found")
                            )
                        )
                    };
                });
            services.AddAuthorization();

            return services;
        }
    }
}