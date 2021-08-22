

//get login-button
document.getElementById('login-submit').addEventListener('click', function () {

    //get email input
    const emailfield = document.getElementById('basic');
    const userEmail = emailfield.value;

    //get email input
    const passwordfield = document.getElementById('secret');
    const userPassword = passwordfield.value;

    //check condition
    if (userEmail == 'munna@gmail.com' && userPassword == 'munna') {
        window.location.href = 'banking.html';
    }
})