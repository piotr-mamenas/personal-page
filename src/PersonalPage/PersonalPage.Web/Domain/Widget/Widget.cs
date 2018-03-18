namespace PersonalPage.Web.Domain.Widget
{
    public class Widget : BaseEntity
    {
        public string Name { get; set; }

        public string Page { get; set; }

        public string Content { get; set; }

        public string ContentType { get; set; }

        public string Color { get; set; }

        public string Icon { get; set; }
    }
}
