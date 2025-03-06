using MySql.Data.MySqlClient;
using System.Windows;

namespace CeylonHaven
{
    public partial class LoginPage : Window
    {
        public string connectionString = "server=127.0.0.1;database=ceylonhaven;user=root;password=gbgk0025$;";

        public LoginPage()
        {
            InitializeComponent();

        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            string username = UsernameTextbox.Text;
            string password = PasswordTextbox.Password;

            // Database connection
            using (var connection = new MySqlConnection(connectionString))
            {
              
                try
                {
                    connection.Open();
                    string query = "SELECT * FROM user WHERE Username = @Username AND Password = @Password";
                    using (var command = new MySqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@Username", username);
                        command.Parameters.AddWithValue("@Password", password);
                        

                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                bool isAdmin = reader.GetInt32(reader.GetOrdinal("IsAdmin")) == 1;

                                MessageBox.Show("Login successful!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                                // Open the Profile Page
                                ProfilePage profilePage = new ProfilePage(username, isAdmin);
                                profilePage.Show();
                                this.Close();
                            }
                            else
                            {
                                MessageBox.Show("Invalid username or password.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                            }
                        }
                    
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"Database error: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }

        private void BackButton_Click(object sender, RoutedEventArgs e)
        {
            MainWindow mainWindow = new MainWindow();
            mainWindow.Show();
            this.Close();
        }
    }
}