function loadPage() {
    console.log('load page');
}

function getUsers(callback) {
    //ExternalFunction()
    setTimeout(() => {
        console.log('get users');
        callback();
    }, 1000);
}

function displayUsers() {
    console.log('display users');
}

function showFooter() {
    console.log('show footer');
}

loadPage();
getUsers(displayUsers);
//displayUsers();
showFooter();
