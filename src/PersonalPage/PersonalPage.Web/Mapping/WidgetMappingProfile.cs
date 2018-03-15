using AutoMapper;

namespace PersonalPage.Web.Mapping
{
    public class WidgetMappingProfile : Profile
    {
        public WidgetMappingProfile()
        {
            CreateMap<Widget, WidgetDto>();

        }
    }
}
