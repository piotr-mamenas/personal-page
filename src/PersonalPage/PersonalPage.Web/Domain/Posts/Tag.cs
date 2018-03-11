using System.Collections.Generic;

namespace PersonalPage.Web.Domain.Posts
{
    public class Tag : BaseEntity
    {
        public string Name { get; set; }

        public ICollection<Post> Posts { get; set; }

        public Tag()
        {
            Posts = new List<Post>();
        }
    }
}
