using System.Collections.Generic;

namespace PersonalPage.Web.Domain.Posts
{
    public class Tag : BaseEntity
    {
        public string Name { get; set; }

        public string Icon { get; set; }

        public string IconColor { get; set; }

        public ICollection<PostTag> PostTags { get; set; }

        protected Tag()
        {
            PostTags = new List<PostTag>();
        }
    }
}
