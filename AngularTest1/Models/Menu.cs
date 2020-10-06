using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTest1.Models
{
    public class Menu
    {
        [Key]
        public int Menu_Id { get; set; }
        public string Menu_Title { get; set; }
        public string Menu_Active { get; set; }
    }
}
