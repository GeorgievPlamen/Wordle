using Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Entities
{
    public class WordleDbContext : IdentityDbContext<User>
    {
        public WordleDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<WordBg> WordsBg { get; set; }
        public DbSet<WordEn> WordsEn { get; set; }
        public DbSet<GuessesEn> GuessesEn { get; set; }
        public DbSet<GuessesToday> GuessesToday { get; set; }
        public DbSet<WordsOfTheDay> WordsOfTheDay { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>()
                .HasData(
                    new IdentityRole { Name = "Member", NormalizedName = "MEMBER" },
                    new IdentityRole { Name = "Admin", NormalizedName = "ADMIN" }
                );
        }
    }
}