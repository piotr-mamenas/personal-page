using System.Linq;
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
                .ForMember(dest => dest.DateCreated, opt => opt.MapFrom(src => src.DateCreated.ToShortDateString()))
                .ForMember(dest => dest.Tags, opt => opt.MapFrom(src => src.PostTags.Select(pt => pt.Tag)));

            CreateMap<Post, RecentPostDto>()
                .ForMember(dest => dest.DateCreated, opt => opt.MapFrom(src => src.DateCreated.ToShortDateString()));

            CreateMap<Tag, TagDto>().ReverseMap();
        }
    }
}
