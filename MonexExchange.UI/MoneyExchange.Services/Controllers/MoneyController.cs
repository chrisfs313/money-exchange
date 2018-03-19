using MoneyExchange.Services.Enums;
using MoneyExchange.Services.Models;

using MoneyExchange.Common;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MoneyExchange.Services.Controllers
{
    [RoutePrefix("api/money")]
    public class MoneyController : ApiController
    {
        [HttpGet]
        [Route("getMoneyExchange/{baseCoin}/{targetCoin}")]
        public IHttpActionResult GetMoneyExchange(string baseCoin, string targetCoin)
        {
            baseCoin = baseCoin.ToUpper();
            targetCoin = targetCoin.ToUpper();

            float rateAmount_origin = 0;
            float rateAmount_target = 0;

            switch (baseCoin)
            {
                case EnumMoney.USD:
                    if (EnumMoney.EU == targetCoin)
                    {
                        rateAmount_origin = Common.Common.Random(0.713251f, 0.913251f);
                        rateAmount_target = Common.Common.Random(1.12963f, 1.32963f);
                    }
                    break;
                case EnumMoney.EU:
                    if (EnumMoney.USD == targetCoin)
                    {
                        rateAmount_target = Common.Common.Random(0.713251f, 0.913251f);
                        rateAmount_origin = Common.Common.Random(1.12963f, 1.32963f);
                    }
                    break;
            }

            var moneyRateResult = new MoneyRate()
            {
                Base = baseCoin,
                Date = DateTime.Now.ToShortDateString(),
                Rates = new List<Rate>()
                {
                    new Rate() { Base = targetCoin, Amount = rateAmount_origin },
                    new Rate() { Base = baseCoin, Amount = rateAmount_target },
                }
            };

            return Ok(moneyRateResult);
        }
    }
}
