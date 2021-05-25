const loginElem = document.querySelector('.login')
const loginForm = document.querySelector('.login-form')
const emailInput = document.querySelector('.login-email')
const passwordInput = document.querySelector('.login-password')
const loginSignup = document.querySelector('.login-signup')

const userElem = document.querySelector('.user')
const userNameElem = document.querySelector('.user-name')


const listUsers = [
  {
    id: '01',
    email: 'maks@mail.com',
    password: '12345',
    displayName: 'MaksJs'
  },
  {
    id: '02',
    email: 'Kate@mail.com',
    password: '123456',
    displayName: 'KateKillJs'
  }
];

const setUsers = {
  user: null,
  logIn(email, password){
    const user = this.getUser(email)
    if(user && user.password === password){
      this.authorizedUser(user)
    }else{
      alert('Пользователь с такими данными не найден')
    }
  },
  logOut(){
    
  },
  signUp(email, password){
    if(!setUsers.getUser(email)){
      const user = {email, password, displayName: email}
      listUsers.push(user)
      
    }else{
      alert('Пользователь с таким email уже зарегистрирован')
    }
  },
  getUser(email){
    // console.log(listUsers.find(item => item.email === email))
    return listUsers.find(item => item.email === email)
  },
  authorizedUser(user){
  
    this.user = user
  } 
}

const toggleAuthDom = () => {
  const user = setUsers.user
  console.log(user)

  if(user){
    loginElem.style.display = 'none'
    userElem.style.display = ''
    userNameElem.textContent = user.displayName
  }else{
    loginElem.style.display = ''
    userElem.style.display = 'none'
  }
}


loginForm.addEventListener('submit', event => {
  event.preventDefault()
  const emailValue = emailInput.value
  const passwordValue = passwordInput.value

  setUsers.logIn(emailValue, passwordValue)
  toggleAuthDom()
})

loginSignup.addEventListener('click', event => {
  event.preventDefault()

  const emailValue = emailInput.value
  const passwordValue = passwordInput.value
  
  setUsers.signUp(emailValue, passwordValue)
  toggleAuthDom()
})

toggleAuthDom()