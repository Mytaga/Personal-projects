using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public class Destroyer : Ship
    {
        public Destroyer()
        {
            this.Name = "Destroyer";
            this.Width = 2;
            this.OccupationType = OccupationType.Destroyer;
        }
    }
}
