using Microsoft.AspNetCore.Mvc;

namespace Wordle.Controllers.Base
{
    [ApiController]
    [Route("[controller]")]
    public abstract class BaseController : ControllerBase
    {

    }
}