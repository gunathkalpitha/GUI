using System.Windows;
using System.Windows.Controls;

namespace CeylonHaven
{
    public partial class ProfilePage : Window
    {
        private string _username;
        private bool _isAdmin;

        public ProfilePage(string username, bool isAdmin)
        {
            InitializeComponent();
            _username = username;
            _isAdmin = isAdmin;

            // Set the profile details dynamically
            SetProfileDetails();
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

                    case "home":
                        MainWindow mainWindow = new MainWindow();
                        mainWindow.Show();
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


        private void SetProfileDetails()
        {
            UserNameLabel.Text = $"Username: {_username}";

            if (_isAdmin)
            {
                // Admin-specific details
                UserRoleLabel.Text = "Role: Admin1";
                BookedRoomsLabel.Text = "Total Booked Rooms: 15"; // Example dynamic data
                RevenueLabel.Text = "Total Revenue: $5,000"; // Example dynamic data
            }
            else
            {
                // Client-specific details
                UserRoleLabel.Text = "Role: Client";
                BookedRoomsLabel.Text = "Your Booked Rooms: 2"; // Example dynamic data
                RoomDetailsLabel.Text = "Room Details: 101 (Deluxe), 102 (Standard)"; // Example dynamic data
                TotalPriceLabel.Text = "Total Price: $300"; // Example dynamic data
            }
        }

        private void LogoutButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate back to Login Page
            LoginPage loginPage = new LoginPage();
            loginPage.Show();
            this.Close();
        }

       
    }
}
