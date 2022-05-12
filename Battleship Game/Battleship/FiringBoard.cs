using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public class FiringBoard : GameBoard
    {
        public List<Coordinates> GetOpenRandomPanels() 
        {
            return Panels.Where(x => x.OccupationType == OccupationType.Empty && x.IsRandomAvailable).Select(x => x.Coordinates).ToList();
        }
     
        public List<Coordinates> GetHitNieghbours()
        {
            List<Panel> panels = new List<Panel>();
            var hits = Panels.Where(x => x.OccupationType == OccupationType.Hit);

            foreach (var hit in hits)
            {
                panels.AddRange(GetNeighbours(hit.Coordinates).ToList());
            }

            return panels.Distinct().Where(x => x.OccupationType == OccupationType.Empty).Select(x => x.Coordinates).ToList();
        }

        public List<Panel> GetNeighbours(Coordinates coordinates)
        {
            int row = coordinates.Row;
            int column = coordinates.Column;
            List<Panel> panels = new List<Panel>();
            if (column > 1)
            {
                panels.Add(Panels.At(row, column - 1));
            }
            if (row > 1)
            {
                panels.Add(Panels.At(row - 1, column));
            }
            if (row < 10)
            {
                panels.Add(Panels.At(row + 1, column));
            }
            if (column < 10)
            {
                panels.Add(Panels.At(row, column + 1));
            }
            return panels;
        }
    }
}
    