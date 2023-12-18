let signup = document.querySelector('#signup')
let signin = document.querySelector('#signin')
let body = document.querySelector('body')

signup.onclick = () => {
  body.classList.add('signup')
}
signin.onclick = () => {
  body.classList.remove('signup')
}