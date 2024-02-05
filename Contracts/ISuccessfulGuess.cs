using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contracts
{
    public interface ISuccessfullGuess
    {
        public Task<bool> SuccessfullGuess(string userId, int guessAttempt, bool bulgarian);
    }
}