using AutoMapper;
using PersonalPage.Web.Domain.Widget;
using PersonalPage.Web.Dtos;

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
