
const onSubmit = (event) => {
    //remove error box if error box is there
    if (!document.getElementsByClassName('error')[0].classList.contains('hide')){
        document.getElementsByClassName('error')[0].classList.add('hide');
    }
    event.preventDefault();
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = event.target.elements[0].value;

    if (email.match(emailRegEx)) {
        //unhide succcess box and remove form input
        document.getElementsByClassName('success')[0].classList.remove('hide');
        document.getElementById('form').classList.add('hide');
    }
    else {
        //unhide error box 
        document.getElementsByClassName('error')[0].classList.remove('hide');
    }
}
