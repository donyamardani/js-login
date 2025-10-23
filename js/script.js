'use strict'
let phoneInp=document.querySelector('#PhoneNumber')
let emailInp=document.querySelector('#email')
let passInp=document.querySelector('#password')
let phoneRegex=/^\+?[1-9][0-9]{7,14}$/gm
let emailRegex=/^\S+@\S+\.\S+$/gm
let passwordRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm


emailInp.addEventListener('change',()=>{
    if(emailRegex.test(emailInp.value)){
        emailInp.classList.add('correct')
        emailInp.classList.remove('incorrect')
    }else{
        emailInp.classList.add('incorrect')
        emailInp.classList.remove('correct')
    }
})


phoneInp.addEventListener('change',()=>{
    if(phoneRegex.test(phoneInp.value)){
        phoneInp.classList.add('correct')
        phoneInp.classList.remove('incorrect')
    }else{
        phoneInp.classList.add('incorrect')
        phoneInp.classList.remove('correct')
    }
})


passInp.addEventListener('change',()=>{
    if(passwordRegex.test(passInp.value)){
        passInp.classList.add('correct')
        passInp.classList.remove('incorrect')
    }else{
        passInp.classList.add('incorrect')
        passInp.classList.remove('correct')
    }
})

