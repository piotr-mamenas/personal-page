﻿using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersonalPage.Web.Domain.Widget;

namespace PersonalPage.Web.Infrastructure.Configurations.WidgetConfigurations
{
    public class WidgetConfiguration : BaseEntityConfiguration<Widget>
    {
        public override void Configure(EntityTypeBuilder<Widget> builder)
        {
            builder.Property(w => w.Name);

            builder.Property(w => w.Content);

            builder.Property(w => w.Page);

            builder.Property(w => w.Color);

            builder.Property(w => w.Icon);

            builder.Property(w => w.ContentType);

            base.Configure(builder);
        }
    }
}
