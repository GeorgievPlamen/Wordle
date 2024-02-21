using Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Entities.DBInit
{
    public class DBInitializor
    {
        public static async Task Initialize(WordleDbContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "john",
                    Email = "john@test.com"
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new User
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };

                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, new[] { "Member", "Admin" });
            }


            if (context.WordsBg.Any() && context.WordsEn.Any()) return;

            using (var sr = new StreamReader("wwwroot/dict/dictBg.txt"))
            {
                var words = sr.ReadToEnd().Split(",");
                foreach (var word in words)
                {
                    context.WordsBg.Add(new WordBg { Value = word });
                }
            }
            using (var sr = new StreamReader("wwwroot/dict/dictEn.txt"))
            {
                var words = sr.ReadToEnd().Split(",");
                foreach (var word in words)
                {
                    context.WordsEn.Add(new WordEn { Value = word });
                }
            }

            context.SaveChanges();
        }
    }
}