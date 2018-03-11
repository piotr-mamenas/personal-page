using AutoMapper;
using PersonalPage.Web.Domain.Posts;
using PersonalPage.Web.Dtos;

namespace PersonalPage.Web.Mapping
{
    public class PostMappingProfile : Profile
    {
        public PostMappingProfile()
        {
            CreateMap<Post, PostDto>().ReverseMap();
            CreateMap<Tag, TagDto>().ReverseMap();
        }
    }
}
