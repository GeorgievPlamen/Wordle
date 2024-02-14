using Entities;

namespace Contracts.DTOs
{
    public class GuessesDTO
    {
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
        public int FailedEn { get; set; }
        public int FailedBg { get; set; }
    }

    public static class GuessesDTOExtensions
    {
        public static void MapGuesses(this GuessesDTO DTO, GuessesEn guessesEn)
        {
            DTO.First = guessesEn.First;
            DTO.Second = guessesEn.Second;
            DTO.Third = guessesEn.Third;
            DTO.Fourth = guessesEn.Fourth;
            DTO.Fifth = guessesEn.Fifth;
            DTO.Sixth = guessesEn.Sixth;
            DTO.FirstBg = guessesEn.FirstBg;
            DTO.SecondBg = guessesEn.SecondBg;
            DTO.ThirdBg = guessesEn.ThirdBg;
            DTO.FourthBg = guessesEn.FourthBg;
            DTO.FifthBg = guessesEn.FifthBg;
            DTO.SixthBg = guessesEn.SixthBg;
            DTO.FailedEn = guessesEn.FailedEn;
            DTO.FailedBg = guessesEn.FailedBg;
        }
    }
}