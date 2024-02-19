using Microsoft.AspNetCore.Mvc;

namespace Wordle.Controllers.Base
{
    [ApiController]
    [Route("/api/[controller]")]
    public abstract class BaseController : ControllerBase
    {

    }
}