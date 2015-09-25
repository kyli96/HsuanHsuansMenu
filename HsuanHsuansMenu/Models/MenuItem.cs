using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HsuanHsuansMenu.Models
{
    public class MenuItem
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public int MenuId { get; set; }
    }
}