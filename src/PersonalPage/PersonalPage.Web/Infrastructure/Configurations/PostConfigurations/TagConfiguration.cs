using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersonalPage.Web.Domain.Posts;

namespace PersonalPage.Web.Infrastructure.Configurations.PostConfigurations
{
    public class TagConfiguration : BaseEntityConfiguration<Tag>
    {
        public override void Configure(EntityTypeBuilder<Tag> builder)
        {
            builder.ToTable("Tags");

            builder.Property(pt => pt.Name);

            builder.HasMany(pt => pt.Posts);

            base.Configure(builder);
        }
    }
}
