using Microsoft.EntityFrameworkCore;
using PersonalPage.Web.Domain.Posts;
using PersonalPage.Web.Domain.Widget;

namespace PersonalPage.Web.Infrastructure
{
    public class AppDbContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<Widget> Widgets { get; set; }

        public AppDbContext(DbContextOptions options)
            : base(options)
        {
            
        }
    }
}
