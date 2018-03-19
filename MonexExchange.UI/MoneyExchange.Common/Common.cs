using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoneyExchange.Common
{
    public class Common
    {
        private static Random M_Random = new System.Random();

        public static float Random(float min, float max)
        {
            return min + (max - min) * (float)M_Random.NextDouble();
        }
    }
}
