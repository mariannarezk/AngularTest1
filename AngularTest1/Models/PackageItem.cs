using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SeniorProject16.Models
{
    public partial class PackageItem
    {
        [Key]
        public int ItemPackageId { get; set; }
        public int ItemId { get; set; }
        public int PackageId { get; set; }
        public double? ItemQtyId { get; set; }
        public string ReplacedBy { get; set; }
        public bool? ItemIsReplaced { get; set; }

        public virtual Items Item { get; set; }
        public virtual Packages Package { get; set; }
    }
}
