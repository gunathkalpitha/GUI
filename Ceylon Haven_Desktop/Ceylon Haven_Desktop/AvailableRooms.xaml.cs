using System.Collections.Generic;
using System.Windows;

namespace CeylonHaven
{
    public partial class AvailableRooms : Window
    {
        public AvailableRooms(List<Room> availableRooms)
        {
            InitializeComponent();
            RoomsListView.ItemsSource = availableRooms;
        }
    }

    public class Room
    {
        public string? RoomId { get; set; }
        public string? RoomType { get; set; }
        public string? Price { get; set; }
        public string? Availability { get; set; }
    }
}
