using System.Security.Cryptography.X509Certificates;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace Entities.DBInit
{
    public class DBInitializor
    {
        public static void Initialize(WordleDbContext context)
        {
            if (context.WordsBg.Any() && context.WordsEn.Any()) return;

            using (var sr = new StreamReader("../Entities/DBInit/dictBg.txt"))
            {
                var words = sr.ReadToEnd().Split(",");
                foreach (var word in words)
                {
                    context.WordsBg.Add(new WordBg { Value = word });
                }
            }
            using (var sr = new StreamReader("../Entities/DBInit/dictEn.txt"))
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