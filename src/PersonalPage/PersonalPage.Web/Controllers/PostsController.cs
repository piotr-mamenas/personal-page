using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.EntityFrameworkCore;
using PersonalPage.Web.Domain.Posts;
using PersonalPage.Web.Dtos;
using PersonalPage.Web.Infrastructure;

namespace PersonalPage.Web.Controllers
{
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public PostsController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IEnumerable<PostDto>> GetAll()
        {
            var postsInDb = await _context.Posts.ToListAsync();

            return _mapper.Map<List<Post>,List<PostDto>>(postsInDb);
        }

        [HttpGet("{tagName}")]
        public async Task<IEnumerable<PostDto>> GetByTag(string tagName)
        {
            var taggedPostIds = await _context.PostTags
                .Include(pt => pt.Tag)
                .Where(pt => pt.Tag.Name == tagName)
                .Select(pt => pt.PostId).ToListAsync();

            var posts = await _context.Posts
                .Include(p => p.PostTags)
                .ThenInclude(p => p.Tag)
                .Where(p => taggedPostIds.Contains(p.Id))
                .ToListAsync();

            return _mapper.Map<List<Post>, List<PostDto>>(posts);
        }
    }
}
