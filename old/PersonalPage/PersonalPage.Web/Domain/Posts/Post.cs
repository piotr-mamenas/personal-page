using System.Collections.Generic;

namespace PersonalPage.Web.Domain.Posts
{
    public class Post : BaseEntity
    {
        public string Title { get; set; }

        public string Content { get; set; }

        public ICollection<PostTag> PostTags { get; set; }

        protected Post()
        {
            PostTags = new List<PostTag>();
        }
    }
}
