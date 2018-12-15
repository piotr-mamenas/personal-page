using System.Collections.Generic;

namespace PersonalPage.Web.Dtos
{
    public class PostDto
    {
        public string Title { get; set; }

        public string Content { get; set; }

        public int Id { get; set; }
        
        public ICollection<TagDto> Tags { get; set; }

        public string DateCreated { get; set; }
    }
}
