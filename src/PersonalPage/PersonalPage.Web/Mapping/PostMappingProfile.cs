using AutoMapper;
using PersonalPage.Web.Domain.Posts;
using PersonalPage.Web.Dtos;

namespace PersonalPage.Web.Mapping
{
    public class PostMappingProfile : Profile
    {
        public PostMappingProfile()
        {
            CreateMap<Post, PostDto>()
                .ForMember(dest => dest.DateCreated, opt => opt.MapFrom(src => src.DateCreated.ToShortDateString()));

            CreateMap<Post, RecentPostDto>()
                .ForMember(dest => dest.DateCreated, opt => opt.MapFrom(src => src.DateCreated.ToShortDateString()));

            CreateMap<Tag, TagDto>().ReverseMap();
        }
    }
}
