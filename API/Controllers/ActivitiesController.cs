using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.Activities;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> Get()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetById(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }
    }
}
