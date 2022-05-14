using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Battleship
{
    public class Game
    {
        
        public Game()
        {
            this.Player1 = new Player("Mitko");
            this.Player2 = new Player("Boryana");

            this.Player1.PlaceShips();
            this.Player2.PlaceShips();

            this.Player1.OutputBoards();
            this.Player2.OutputBoards();
        }

        public Player Player1 { get; set; }
        public Player Player2 { get; set; }

        public void PlayRound()
        {
            var coordinates = Player1.FireShot();
            var result = Player2.ProcessShot(coordinates);
            Player1.ProcessShotResult(coordinates, result);

            if (!Player2.HasLost)
            {
                coordinates = Player2.FireShot();
                result = Player1.ProcessShot(coordinates);
                Player2.ProcessShotResult(coordinates, result);
            }
        }
        public void PlayToEnd()
        {
            while (!Player1.HasLost && !Player2.HasLost)
            {
                PlayRound();
            }

            if (Player1.HasLost)
            {
                Console.WriteLine(Player2.Name + " has won the game!");
            }
            else if (Player2.HasLost)
            {
                Console.WriteLine(Player1.Name + " has won the game!");
            }
        }
    }
}
