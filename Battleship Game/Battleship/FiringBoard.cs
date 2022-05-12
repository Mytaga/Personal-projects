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
            return null;
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
            return null;
        }
    }
}
    