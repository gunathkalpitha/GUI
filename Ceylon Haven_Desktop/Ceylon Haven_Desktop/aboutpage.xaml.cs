using CeylonHaven;
using System.Windows;

namespace Ceylon_Haven_Desktop
{
    public partial class AboutPage : Window
    {
        public AboutPage()
        {
            InitializeComponent();
        }

        private void CloseButton_Click(object sender, RoutedEventArgs e)
        {
            this.Close();
        }

        private void BackToMainWindowButton_Click(object sender, RoutedEventArgs e)
        {
            MainWindow mainWindow = new MainWindow();
            mainWindow.Show();
            this.Close();
        }
    }
}
