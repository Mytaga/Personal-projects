using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public class Cruiser : Ship
    {
        public Cruiser()
        {
            this.Name = "Cruiser";
            this.Width = 3;
            this.OccupationType = OccupationType.Cruiser;
        }
    }
}
