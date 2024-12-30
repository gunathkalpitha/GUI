function navigateTo(section) {
    switch (section) {
        case 'Register':
            window.location.href = 'file:///C:/Users/lap.lk/Desktop/HRS/signup%20page/HTMLPage1.html'; // Use a relative path
            break;
        default:
            alert('Section not found!');
    }
}
