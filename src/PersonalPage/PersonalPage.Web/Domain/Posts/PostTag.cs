namespace PersonalPage.Web.Domain.Posts
{
    public class PostTag : BaseEntity
    {
        public int PostId { get; set; }
        public Post Post { get; set; }

        public int TagId { get; set; }
        public Tag Tag { get; set; }

        protected PostTag()
        {
            
        }
    }
}
