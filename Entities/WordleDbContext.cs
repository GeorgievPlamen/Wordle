using Microsoft.EntityFrameworkCore;

namespace Entities
{
    public class WordleDbContext : DbContext
    {
        public WordleDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<WordBg> WordsBg { get; set; }
        public DbSet<WordEn> WordsEn { get; set; }
        public DbSet<GuessesEn> GuessesEn { get; set; }
        public DbSet<GuessesToday> GuessesToday { get; set; }
    }
}