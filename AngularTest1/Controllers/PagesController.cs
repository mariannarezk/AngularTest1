using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularTest1.Models;
using Microsoft.AspNetCore.Mvc;

namespace AngularTest1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PagesController : ControllerBase
    {
        private readonly AngularTest1Context _context;
        public PagesController(AngularTest1Context context)
        {
            this._context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var pages = _context.Pages.ToList();
            return Ok(pages);
        }

        // GET: api/Pages/5  
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
       

        // POST: api/Pages  
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Pages/5  
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5  
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
