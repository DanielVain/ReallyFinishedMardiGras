const btn = document.getElementById("sendBtn");

const showError = (numberOfError) => {
    const small = document.querySelectorAll('small');
    small[numberOfError - 1].className = 'error';
}
const removeError = (numberOfError) => {
    const small = document.querySelectorAll('small');
    small[numberOfError - 1].className = '';
}


const auth = () => {
    if (fName.value === "") {
        showError(1);
    } else {
        removeError(1);
    }
    if (lName.value === "") {
        showError(2);
    } else {
        removeError(2);
    }
    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value === "") {
        showError(3);
    } else {
        removeError(3);
    }
}
btn.addEventListener('click', auth);