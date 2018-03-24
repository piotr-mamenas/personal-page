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

            builder.Property(t => t.Name);

            builder.Property(t => t.Icon);

            builder.Property(t => t.IconColor);

            builder.HasMany(t => t.PostTags)
                .WithOne(pt => pt.Tag)
                .HasForeignKey(pt => pt.TagId);

            base.Configure(builder);
        }
    }
}
