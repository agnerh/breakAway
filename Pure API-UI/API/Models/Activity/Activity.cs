using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using API.Models;
using BreakAway.Entities;

namespace BreakAway.Models
{
    public class ActivityModel
    {
        public int Id { get; set; }
        
        public string Name { get; set; }
        
        public string ImagePath { get; set; }

        public string Category { get; set; }
    }
}