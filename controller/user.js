import {UserModel} from "../model/user_model.js";
import {User_api} from "../api/user_api.js";

let name = $('#name2');
let email =$('#email');
let password = $('#password2');
let confirm_password = $('#confirmPassword');

let userName = $('#name1');
let userPassword = $('#password');

let signUpBtn = $('#signUpBtn');
let signInBtn = $('#signInBtn');

const userApi = new User_api();

signUpBtn.eq(0).on('click',function (){
    event.preventDefault();
    console.log("Hello");
    let nameValue = name.val();
    console.log(nameValue);
    let emailValue = email.val();
    let passwordValue = password.val();
    let confirm_passwordValue = confirm_password.val();

    if(passwordValue === confirm_passwordValue){
        let userModel = new UserModel(nameValue,emailValue,passwordValue);
        userApi.saveUser(userModel);
    }
});

signInBtn.eq(0).on('click',function (){
    event.preventDefault();
    let userNameValue = userName.val();
    let userPasswordValue = userPassword.val();

    userApi.getUser(userNameValue,userPasswordValue);
});