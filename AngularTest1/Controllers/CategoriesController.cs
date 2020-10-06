using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularTest1.Models;
using Microsoft.AspNetCore.Mvc;
using SeniorProject16.Models;

namespace AngularTest1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly AngularTest1Context _context;
        public CategoriesController(AngularTest1Context context)
        {
           
            this._context = context;
        }
        [HttpGet]
        [Route("[action]")]
        public IActionResult Get(int menuid)
        {


            var catos = _context.Categories.Where(m => m.MenuId == menuid).ToList();
          
            return Ok(catos);
        }


        [HttpPost]
        [Route("[action]")]
        public IActionResult Create([FromBody] Categories c)
        {


            _context.Add(c);
            _context.SaveChanges();
            return RedirectToAction(nameof(Get));

        }
       
        [HttpPost]
        [Route("[action]")]
        public int Edit([FromBody] Categories m)
        {

            _context.Update(m);
            _context.SaveChanges();
            return 1;
        }
        [HttpPost]
        [Route("[action]")]
        public int Delete(Categories m)
        {
            _context.Remove(m);
            _context.SaveChanges();
            return 1;
        }
    }
}
