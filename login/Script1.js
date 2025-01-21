function navigateTo(section) {
    switch (section) {
        case 'home':
            window.location.href = 'index.html'; // Replace with your home page URL
            break;
        case 'book':
            window.location.href = 'book.html'; // Replace with your booking page URL
            break;
        case 'Register':
            window.location.href = 'file:///C:/Users/lap.lk/Desktop/HRS/signup%20page/HTMLPage1.html'; // Replace with your signup page URL
            break;
        case 'Login':
            window.location.href = 'file:///C:/Users/lap.lk/Desktop/HRS/loging%20page/HTMLPage1.html'; // Replace with your login page URL
            break;
        default:
            alert('Section not found!');
    }
}
