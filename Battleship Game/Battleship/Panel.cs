using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public class Panel
    {
        public Panel(int row, int column)
        {
            this.OccupationType = OccupationType.Empty;
            this.Coordinates = new Coordinates(row, column);
        }

        public OccupationType OccupationType { get; set; }
        public Coordinates Coordinates { get; set; }

        public string Status
        {
            get
            {
                return OccupationType.GetName();
            }
        }

        public bool IsOccupied
        {
            get
            {
                return OccupationType == OccupationType.Battleship
                    || OccupationType == OccupationType.Destroyer
                    || OccupationType == OccupationType.Cruiser
                    || OccupationType == OccupationType.Submarine
                    || OccupationType == OccupationType.Carrier;
            }
        }
        public bool IsRandomAvailable
        {
            get
            {
                return (Coordinates.Row % 2 == 0 && Coordinates.Column % 2 == 0)
                    || (Coordinates.Row % 2 == 1 && Coordinates.Column % 2 == 1);
            }
        }
    }
}
