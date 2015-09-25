using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HsuanHsuansMenu.Models
{
    public class Menu
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public ICollection<MenuItem> Items { get; set; }
    }
}