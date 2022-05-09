using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public class Player
    {
        public Player(string name)
        {
            this.Name = name;
            this.Board = new GameBoard();
            this.FiringBoard = new FiringBoard();
            this.Ships = new List<Ship>()
            {
                new Destroyer(),
                new Submarine(),
                new Cruiser(),
                new Battleship(),
                new Carrier()
            };
        }

        public string Name { get; set; }
        public GameBoard Board { get; set; }
        public FiringBoard FiringBoard { get; set; }    
        public List<Ship> Ships { get; set; }
        public bool HasLost => this.Ships.All(x => x.IsSunk);
    }
}
