using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;

namespace Entities
{
    public class WordleDbContext : DbContext
    {
        public WordleDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<WordBg> WordsBg { get; set; }
        public DbSet<WordEn> WordsEn { get; set; }
    }
}