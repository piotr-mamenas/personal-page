using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PersonalPage.Web.Controllers
{
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        [HttpGet("[action]")]
        public async Task<IActionResult> Get()
        {
            return BadRequest();
        }
    }
}
