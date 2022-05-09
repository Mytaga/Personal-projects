using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public enum OccupationType 
    {
        [Description("o")]
        Empty,

        [Description("B")]
        Battleship,

        [Description("C")]
        Cruiser,

        [Description("D")]
        Destroyer,
            
        [Description("S")]
        Submarine,

        [Description("A")]
        Carrier,

        [Description("X")]
        Hit,

        [Description("M")]
        Miss
    }
}
