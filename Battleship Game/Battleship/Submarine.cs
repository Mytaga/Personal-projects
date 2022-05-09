using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public class Submarine : Ship
    {
        public Submarine()
        {
            this.Name = "Submarine";
            this.Width = 1;
            this.OccupationType = OccupationType.Submarine;
        }
    }
}
