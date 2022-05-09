using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public class Battleship : Ship
    {
        public Battleship()
        {
            this.Name = "Battleship";
            this.Width = 4;
            this.OccupationType = OccupationType.Battleship;
        }
    }
}
