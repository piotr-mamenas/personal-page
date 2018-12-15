using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersonalPage.Web.Domain;

namespace PersonalPage.Web.Infrastructure.Configurations
{
    public abstract class BaseEntityConfiguration<T> : IEntityTypeConfiguration<T> where T : BaseEntity
    {
        public virtual void Configure(EntityTypeBuilder<T> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(b => b.Id)
                .UseSqlServerIdentityColumn()
                .IsRequired();

            builder.Property(b => b.DateCreated)
                .IsRequired();

            builder.Property(b => b.DateModified)
                .IsRequired();
        }
    }
}
