using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalPage.Web.Domain.Posts;
using PersonalPage.Web.Dtos;
using PersonalPage.Web.Infrastructure;

namespace PersonalPage.Web.Controllers
{
    [Route("api/[controller]")]
    public class TagsController : Controller
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public TagsController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAll()
        {
            var tagsInDb = await _context.Tags.ToListAsync();

            if (tagsInDb == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<List<Tag>, List<TagDto>>(tagsInDb));
        }
    }
}
