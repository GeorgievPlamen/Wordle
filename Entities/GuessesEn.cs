using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Entities
{
    public class GuessesEn
    {
        [Key]
        public string? UserId { get; set; }
        public int First { get; set; }
        public int Second { get; set; }
        public int Third { get; set; }
        public int Fourth { get; set; }
        public int Fifth { get; set; }
        public int Sixth { get; set; }
        public int FirstBg { get; set; }
        public int SecondBg { get; set; }
        public int ThirdBg { get; set; }
        public int FourthBg { get; set; }
        public int FifthBg { get; set; }
        public int SixthBg { get; set; }
    }
}