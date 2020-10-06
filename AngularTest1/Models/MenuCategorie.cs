using AngularTest1.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SeniorProject16.Models
{
    public partial class MenuCategorie
    {
        [Key]
        public int MenuCategoryId { get; set; }
        public int Menu_Id { get; set; }
        public int CategId { get; set; }
        public bool? CategEnabled { get; set; }

        public virtual Categories Categ { get; set; }
        public virtual Menu Menu { get; set; }
    }
}
