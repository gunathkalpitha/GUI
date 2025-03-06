using Ceylon_Haven_Desktop;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Controls;

namespace CeylonHaven
{
    public partial class MainWindow : Window
    {
        public string connectionString = "server=127.0.0.1;database=ceylonhaven;user=root;password=gbgk0025$;";

        public MainWindow()
        {
            InitializeComponent();
        }

        private void NavigationButton_Click(object sender, RoutedEventArgs e)
        {
            if (sender is Button button)
            {
                switch (button.Tag?.ToString())
                {
                    case "login":
                        LoginPage loginPage = new LoginPage();
                        loginPage.Show();
                        this.Close();
                        break;

                    case "register":
                        SignUpPage signUpPage = new SignUpPage();
                        signUpPage.Show();
                        this.Close();
                        break;
                    case "about":
                        AboutPage aboutPage = new AboutPage();
                        aboutPage.Show();
                        this.Close();
                        break;


                    default:
                        MessageBox.Show($"Navigation to {button.Tag} is not implemented.", "Navigation", MessageBoxButton.OK, MessageBoxImage.Information);
                        break;
                }
            }
            else
            {
                MessageBox.Show("The clicked element is not a button.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void CheckAvailabilityButton_Click(object sender, RoutedEventArgs e)
        {
            var checkInDate = CheckInDatePicker.SelectedDate;
            var checkOutDate = CheckOutDatePicker.SelectedDate;
            var selectedGuests = GuestComboBox.SelectedItem;

            if (checkInDate == null || checkOutDate == null || selectedGuests == null)
            {
                MessageBox.Show("Please fill in all fields before checking availability.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            var availableRooms = GetAvailableRooms();
            AvailableRooms roomsWindow = new AvailableRooms(availableRooms);
            roomsWindow.Show();
        }

        private List<Room> GetAvailableRooms()
        {
            var rooms = new List<Room>();

            using (var connection = new MySqlConnection(connectionString))
            {
                try
                {
                    connection.Open();


                    string query = "SELECT room_id, room_type, room_price, Availability FROM rooms WHERE Availability > 0";
                    using (var command = new MySqlCommand(query, connection))
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            rooms.Add(new Room
                            {
                                RoomId = reader["room_id"].ToString(),
                                RoomType = reader["room_type"].ToString(),
                                Price = reader["room_price"].ToString(), // Updated column name
                                Availability = reader["Availability"].ToString()
                            });
                        }
                    }

                }
                catch (MySqlException ex)
                {
                    MessageBox.Show($"Database error: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }

            return rooms;
        }
    }
}

