using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularTest1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;

namespace AngularTest1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenusController : ControllerBase
    {
        private readonly AngularTest1Context _context;
        private readonly ILogger<MenusController> _logger;
        public MenusController(AngularTest1Context context,ILogger<MenusController> logger)
        {
            this._logger = logger;
            this._context = context;
        }
        [HttpGet]
        public IActionResult GetM()
        {
            var menus = _context.Menus.ToList();
           // var menus = "ok";
            return Ok(menus);
        }
     

        [HttpPost]
      
        public IActionResult CreateM([FromBody] Menu m)
        {
           
          
            _context.Add(m);
            _context.SaveChanges();
                return RedirectToAction(nameof(GetM));
              
        }
        [HttpPost]
        [Route("[action]")]
        public IActionResult save([FromBody] Menu m)
        {


            _context.Add(m);
            _context.SaveChanges();
            return RedirectToAction(nameof(GetM));

        }
        [HttpPut]
        
        public int Edit([FromBody] Menu m)
        {

            _context.Update(m);
            _context.SaveChanges();
            return 1;
        }
        [HttpPost]
        [Route("[action]")]
        public int Delete(Menu m)
        {
            _context.Remove(m);
            _context.SaveChanges();
            return 1;
        }

    }
}
