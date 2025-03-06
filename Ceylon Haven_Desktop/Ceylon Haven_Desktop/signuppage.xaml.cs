using MySql.Data.MySqlClient;
using System.Windows;

namespace CeylonHaven
{
    public partial class SignUpPage : Window
    {
        public SignUpPage()
        {
            InitializeComponent();
        }
        private void ClearForm()
        {
            // Clear all the form fields
            NameTextBox.Clear();
            AddressTextBox.Clear();
            EmailTextBox.Clear();
            ContactNumberTextBox.Clear();
            CountryComboBox.SelectedIndex = -1; // Deselect any selected country
            UsernameTextBox.Clear();
            PasswordBox.Clear();
        }


        private void SignUpButton_Click(object sender, RoutedEventArgs e)
        {
            // Retrieve user inputs
            string name = NameTextBox.Text.Trim();
            string address = AddressTextBox.Text.Trim();
            string email = EmailTextBox.Text.Trim();
            string contactNumber = ContactNumberTextBox.Text.Trim();
            string country = CountryComboBox.SelectedItem?.ToString() ?? string.Empty;
            string username = UsernameTextBox.Text.Trim();
            string password = PasswordBox.Password.Trim();

            // Validation for required fields
            if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                MessageBox.Show("Name, Username, and Password are required fields.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }


            // Optional: Validate contact number
            if (!long.TryParse(contactNumber, out _) || contactNumber.Length < 8)
            {
                MessageBox.Show("Please enter a valid contact number.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Database connection and insertion
            string connectionString = "server=127.0.0.1;database=ceylonhaven;user=root;password=gbgk0025$;";
            using (var connection = new MySqlConnection(connectionString))
            {
                try
                {
                    connection.Open();

                    string query = "INSERT INTO register (Name, Address, Email, Contact, Country, Username, Password) " +
                                   "VALUES (@Name, @Address, @Email, @Contact, @Country, @Username, @Password)";

                    using (var command = new MySqlCommand(query, connection))
                    {
                        // Add parameters to prevent SQL injection
                        command.Parameters.AddWithValue("@Name", name);
                        command.Parameters.AddWithValue("@Address", address);
                        command.Parameters.AddWithValue("@Email", email);
                        command.Parameters.AddWithValue("@Contact", contactNumber);
                        command.Parameters.AddWithValue("@Country", country);
                        command.Parameters.AddWithValue("@Username", username);

                        // Hash the password before storing it
                        string hashedPassword = HashPassword(password);
                        command.Parameters.AddWithValue("@Password", hashedPassword);

                        // Execute the query
                        command.ExecuteNonQuery();

                        MessageBox.Show("Sign-up successful!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                        // Reset form
                       ClearForm();
                        LoginPage loginPage = new LoginPage();
                        loginPage.Show();
                        this.Close();


                    }

                }
                
                catch (Exception ex)
                {
                    MessageBox.Show($"Database error: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }

        // Hash Password for Security
        private string HashPassword(string password)
        {
            using (var sha256 = System.Security.Cryptography.SHA256.Create())
            {
                byte[] bytes = sha256.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return Convert.ToBase64String(bytes);
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
