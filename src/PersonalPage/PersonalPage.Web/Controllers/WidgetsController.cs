using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalPage.Web.Domain.Widget;
using PersonalPage.Web.Dtos;
using PersonalPage.Web.Infrastructure;

namespace PersonalPage.Web.Controllers
{
    [Route("api/[controller]")]
    public class WidgetsController : Controller
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public WidgetsController(IMapper mapper, AppDbContext context)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IEnumerable<WidgetDto>> GetAll()
        {
            var widgetsInDb = await _context.Widgets.ToListAsync();

            return _mapper.Map<List<Widget>, List<WidgetDto>>(widgetsInDb);
        }
    }
}
