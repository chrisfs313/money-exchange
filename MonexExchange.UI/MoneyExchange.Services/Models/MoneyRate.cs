using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoneyExchange.Services.Models
{
    public class MoneyRate
    {
        public string Base { get; set; }
        public string Date { get; set; }
        public List<Rate> Rates { get; set; }
    }
}