﻿using System;
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

        public void PlaceShips()
        {
            Random rand = new Random(Guid.NewGuid().GetHashCode());

            foreach (var ship in this.Ships)
            {
                bool isOpen = true;

                while (isOpen)
                {
                    var startColumn = rand.Next(1, 11);
                    var startRow = rand.Next(1, 11);
                    int endRow = startRow;
                    int endColumn = startColumn;
                    var orientation = rand.Next(1, 101) % 2;

                    List<int> panelNumbers = new List<int>();
                    if (orientation == 0)
                    {
                        for (int i = 0; i < ship.Width; i++)
                        {
                            endRow++;
                        }
                    }
                    else
                    {
                        for (int i = 0; i < ship.Width; i++)
                        {
                            endColumn++;
                        }
                    }

                    if (endRow > 10 || endColumn > 10)
                    {
                        isOpen = true;
                        continue; 
                    }
                    
                    var affectedPanels = this.Board.Panels.Range(startRow, startColumn, endRow, endColumn);

                    if (affectedPanels.Any(p => p.IsOccupied))
                    {
                        isOpen = true;
                        continue;
                    }

                    foreach (var panel in affectedPanels)
                    {
                        panel.OccupationType = ship.OccupationType;
                    }

                    isOpen = false;
                }
            }
        }
        public void OutputBoards()
        {
            Console.WriteLine(Name);
            Console.WriteLine("Own Board:                          Firing Board:");
            for (int row = 1; row <= 10; row++)
            {
                for (int ownColumn = 1; ownColumn <= 10; ownColumn++)
                {
                    Console.Write(Board.Panels.At(row, ownColumn).Status + " ");
                }
                Console.Write("                ");
                for (int firingColumn = 1; firingColumn <= 10; firingColumn++)
                {
                    Console.Write(FiringBoard.Panels.At(row, firingColumn).Status + " ");
                }
                Console.WriteLine(Environment.NewLine);

            }
            Console.WriteLine(Environment.NewLine);
        }
        public Coordinates FireShot()
        {
            var hitNeighbours = FiringBoard.GetHitNieghbours();
            Coordinates coords;

            if (hitNeighbours.Any())
            {
                coords = SearchingShot();
            }
            else
            {
                coords = RandomShot();
            }

            Console.WriteLine(this.Name + " says: \"Firing shot at "
                      + coords.Row.ToString()
                      + ", " + coords.Column.ToString()
                      + "\"");

            return coords;
        }
        public Coordinates RandomShot()
        {
            var availablePanels = FiringBoard.GetOpenRandomPanels();
            Random rand = new Random(Guid.NewGuid().GetHashCode());
            var panelId = rand.Next(availablePanels.Count);
            return availablePanels[panelId];
        }
        public Coordinates SearchingShot()
        {
            Random rand = new Random(Guid.NewGuid().GetHashCode());
            var hitNeighbours = FiringBoard.GetHitNieghbours();
            var neighborID = rand.Next(hitNeighbours.Count);
            return hitNeighbours[neighborID];
        }
        public ShotResult ProcessShot(Coordinates coords)
        {
            var panel = Board.Panels.At(coords.Row, coords.Column);

            if (!panel.IsOccupied)
            {
                Console.WriteLine(this.Name + " says: \"Miss!\"");
                return ShotResult.Miss;
            }

            var ship = Ships.First(x => x.OccupationType == panel.OccupationType);
            ship.Hits++;

            Console.WriteLine(Name + " says: \"Hit!\"");

            if (ship.IsSunk)
            {
                Console.WriteLine(Name + " says: \"You sunk my " + ship.Name + "!\"");
            }

            return ShotResult.Hit;
        }

        public void ProcessShotResult(Coordinates coords, ShotResult result)
        {
            var panel = FiringBoard.Panels.At(coords.Row, coords.Column);

            switch (result)
            {
                case ShotResult.Hit:
                    panel.OccupationType = OccupationType.Hit;
                    break;

                default:
                    panel.OccupationType = OccupationType.Miss;
                    break;
            }
        }
    }
}
