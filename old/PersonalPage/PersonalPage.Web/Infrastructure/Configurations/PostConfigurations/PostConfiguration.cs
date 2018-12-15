using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersonalPage.Web.Domain.Posts;

namespace PersonalPage.Web.Infrastructure.Configurations.PostConfigurations
{
    public class PostConfiguration : BaseEntityConfiguration<Post>
    {
        public override void Configure(EntityTypeBuilder<Post> builder)
        {
            builder.Property(p => p.Title)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(p => p.Content)
                .IsRequired();

            builder.HasMany(p => p.PostTags)
                .WithOne(pt => pt.Post)
                .HasForeignKey(pt => pt.PostId);

            base.Configure(builder);
        }
    }
}
