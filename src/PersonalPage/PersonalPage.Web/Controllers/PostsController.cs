using System.Collections.Generic;
using System.Linq;
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
            var postsInDb = await _context.Posts
                .Include(p => p.PostTags)
                .ThenInclude(p => p.Tag)
                .ToListAsync();

            return _mapper.Map<List<Post>,List<PostDto>>(postsInDb);
        }

        [HttpGet("tags/{tagName}")]
        public async Task<IActionResult> GetByTag(string tagName)
        {
            var taggedPostIds = await _context.PostTags
                .Include(pt => pt.Tag)
                .Where(pt => pt.Tag.Name == tagName)
                .Select(pt => pt.PostId)
                .ToListAsync();

            if (!taggedPostIds.Any())
            {
                return NotFound();
            }

            var posts = await _context.Posts
                .Include(p => p.PostTags)
                .ThenInclude(p => p.Tag)
                .Where(p => taggedPostIds.Contains(p.Id))
                .ToListAsync();

            if (!posts.Any())
            {
                return NotFound();
            }

            return Ok(_mapper.Map<List<Post>, List<PostDto>>(posts));
        }

        [HttpGet("{postId}")]
        public async Task<IActionResult> GetById(int postId)
        {
            var post = await _context.Posts.SingleOrDefaultAsync(p => p.Id == postId);

            if (post == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<Post, PostDto>(post));
        }

        [HttpGet("recent/{postAmount}")]
        public async Task<IActionResult> GetRecentPosts(int postAmount)
        {
            var recentPosts = await _context.Posts
                .OrderByDescending(p => p.DateCreated)
                .Take(postAmount)
                .ToListAsync();

            if (!recentPosts.Any())
            {
                return NotFound();
            }

            return Ok(_mapper.Map<List<Post>, List<RecentPostDto>>(recentPosts));
        }
    }
}
