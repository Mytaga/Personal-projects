using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public class Carrier : Ship
    {
        public Carrier()
        {
            this.Name = "Carrier";
            this.Width = 5;
            this.OccupationType = OccupationType.Carrier;
        }
    }
}
