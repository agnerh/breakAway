using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using BreakAway.Entities;
using BreakAway.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BreakAway.Controllers
{
    public class ActivitiesController : ControllerBase
    {
        private readonly Repository _repository;

        public ActivitiesController(Repository repository)
        {
            if (repository == null)
            {
                throw new ArgumentNullException("repository");
            }

            _repository = repository;
        }

        [HttpGet]
        [Route("[controller]")]
        public async Task<ActionResult<ActivityModel[]>> Get()
        {
            var models = await _repository.Activities.Select(a => new ActivityModel
            {
                Id = a.Id,
                Name = a.Name.Trim(),
                ImagePath = a.ImagePath.Trim(),
                Category = a.Category.Trim()
            })
            .ToArrayAsync();

            return models;
        }

        [HttpGet]
        [Route("[controller]/{id}")]
        public async Task<ActionResult<Models.ActivityModel>> Get(int id)
        {            
            var activity = await _repository.Activities.FirstOrDefaultAsync(a => a.Id == id);

            if (activity == null)
            {
                return BadRequest("Unable to find activity");
            }

            var model = new Models.ActivityModel
            {
                Id = activity.Id,
                Name = activity.Name.Trim(),
                ImagePath = activity.ImagePath.Trim(),
                Category = activity.Category.Trim()
            };

            return model;

        }
    }
}
