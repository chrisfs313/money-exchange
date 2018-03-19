using MoneyExchange.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MoneyExchange.Services.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("doLogin/{email}/{password}")]
        public IHttpActionResult DoLogin(string email, string password)
        {
            var validLogin = false;

            if (email == "admin" && password == "1234")
            {
                validLogin = true;
            }

            return Ok(validLogin);
        }
    }
}