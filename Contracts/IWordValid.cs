using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contracts
{
    public interface IWordValid
    {
        public Task<bool> IsValid(string word, bool bulgarian);
    }
}