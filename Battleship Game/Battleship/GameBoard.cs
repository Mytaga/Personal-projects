using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public class GameBoard
    {
        public GameBoard()
        {
            this.Panels = new List<Panel>();

            for (int i = 0; i < 10; i++)
            {
                for (int j = 0; j < 10; j++)
                {
                    this.Panels.Add(new Panel(i, j));
                }
            }
        }

        public List<Panel> Panels { get; set; }

    }
}
