using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public class Coordinates
    {
        public Coordinates(int row, int column)
        {
            this.Row = row;
            this.Column = column;
        }

        public int Row { get; set; }
        public int Column { get; set; } 
    }
}
