using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersonalPage.Web.Domain.Widget;

namespace PersonalPage.Web.Infrastructure.Configurations.WidgetConfigurations
{
    public class WidgetConfiguration : BaseEntityConfiguration<Widget>
    {
        public override void Configure(EntityTypeBuilder<Widget> builder)
        {
            builder.Property(w => w.Name);

            base.Configure(builder);
        }
    }
}
