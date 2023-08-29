const elements = {
    form : document.querySelector('.login-form')
}
// console.dir(elements.form)
elements.form.addEventListener('submit',handleSub)
function handleSub(evt){
    evt.preventDefault();
    const {email,password}= evt.currentTarget.elements;
    if(email.value === "" || password.value === ""){
     return   alert('Всі поля повинні бути заповнені!')
    }
    else{ console.dir(email.value)
        console.dir(password.value) }
    
}