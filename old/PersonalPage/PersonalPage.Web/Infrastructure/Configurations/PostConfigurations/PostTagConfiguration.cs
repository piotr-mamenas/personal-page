using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersonalPage.Web.Domain.Posts;

namespace PersonalPage.Web.Infrastructure.Configurations.PostConfigurations
{
    public class PostTagConfiguration : BaseEntityConfiguration<PostTag>
    {
        public override void Configure(EntityTypeBuilder<PostTag> builder)
        {
            builder.ToTable("PostTags");

            builder.HasKey(pt => new
            {
                pt.PostId,
                pt.TagId
            });
            
            base.Configure(builder);
        }
    }
}
