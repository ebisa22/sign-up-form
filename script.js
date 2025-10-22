const first_password=document.querySelector('#first_password');
const confirm_password=document.querySelector('#confirm_password');
const submit_btn=document.querySelector('#create-account-btn');
const form=document.querySelector('#form')
//adding simple password validation
form.addEventListener('submit',(e)=>{
    if(first_password.value!=confirm_password.value){
        e.preventDefault();
        confirm_password.style.cssText='border-color:red';
    }
    else{
        confirm_password.style.cssText='';
    }
})
 