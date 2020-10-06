using AngularTest1.Models;
using Microsoft.EntityFrameworkCore;
using SeniorProject16.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTest1.Models
{
    public class AngularTest1Context : DbContext
    {
        public AngularTest1Context(DbContextOptions<AngularTest1Context> options) : base(options)
        {

        }
        public DbSet<Page> Pages { get; set; }
        public DbSet<Menu> Menus { get; set; }
        public DbSet<Categories> Categories { get; set; }
        public DbSet<Ingredients> Ingredients { get; set; }
        public DbSet<IngrItemQuantity> IngrItemQuantities { get; set; }
        public DbSet<IngPackageQuantity> IngPackageQuantities { get; set; }
        public DbSet<Items> Items { get; set; }
        public DbSet<MenuCategorie> MenuCategories { get; set; }
        public DbSet<PackageItem> PackageItems { get; set; }
        public DbSet<Packages> Packages { get; set; }
        public DbSet<Sections> Sections { get; set; }
        public DbSet<Workout> Workout { get; set; }
    }
}
