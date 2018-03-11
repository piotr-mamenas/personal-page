using System.Collections.Generic;

namespace PersonalPage.Web.Domain.Posts
{
    public class Tag : BaseEntity
    {
        public string Name { get; set; }

        public ICollection<PostTag> PostTags { get; set; }

        public Tag()
        {
            PostTags = new List<PostTag>();
        }
    }
}
