using System;

namespace PersonalPage.Web.Dtos
{
    public class PostDto
    {
        public string Title { get; set; }

        public string Content { get; set; }

        public int Id { get; set; }
        
        public DateTime DateInserted { get; set; }
    }
}
