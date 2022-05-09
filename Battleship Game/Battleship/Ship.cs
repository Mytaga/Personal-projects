using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public abstract class Ship
    {
        public string Name { get; set; }    
        public int Width { get; set; }
        public int Hits { get; set; }
        public OccupationType OccupationType { get; set; }
        public bool IsSunk => this.Hits >= this.Hits;

    }
}
