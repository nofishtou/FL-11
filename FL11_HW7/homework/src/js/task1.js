const mailLength = 6
const passwordLength = 5
let adminMail = 'admin@gmail.com'
let userMail = 'user@gmail.com'
let adminPassword = 'AdminPass'
let userPassword = 'UserPass'
let email = prompt('Enter your email please:')
let password
let changePassword 

if(email === null || email === ''){
  alert('Canceled')
} else if ( email === adminMail || email === userMail){
  password = prompt('Enter your password please:')
} else if (email.length < mailLength){
  alert('I don\'t know any emails having name length less than 6 symbols.')
} else {
  alert('I don’t know you.')
}

if(password !== undefined){
  if(password === null || password === ''){
    alert('Canceled')
  } else if (password === adminPassword || password === userPassword){
    changePassword = confirm('Do you want change password?')
  } else {
    alert('Wrong password.')
  }
}

if(changePassword !== undefined ){
  if(changePassword === true){
    let oldPassword = prompt('Enter old password please:')
    
    if( oldPassword === null || oldPassword === ''){
      alert('You have failed the change.')
    } else if ( oldPassword === adminPassword ){
      let newPassword = prompt('Enter new password please:')

      if( newPassword === null || newPassword === ''){
        alert('You have failed the change.')
      } else if (newPassword.length < passwordLength){
        alert('It’s too short password. Sorry.')
      } else {
        let repeatPassword = prompt('Repeat new password please:')
        
        if(repeatPassword === null || repeatPassword ===''){
          alert('You have failed the change.')
        } else if( repeatPassword === newPassword){
          adminPassword = newPassword
          alert('You have successfully changed your password. ')
        } else {
          alert('Wrong password.')
        }
      }
    } else if (oldPassword === userPassword){
      let newPassword = prompt('Enter new password please:')
      
      if( newPassword === null || newPassword === ''){
        alert('You have failed the change.')
      } else if (newPassword.length < passwordLength){
        alert('It’s too short password. Sorry.')
      } else {
        let repeatPassword = prompt('Repeat new password please:')
        
        if(repeatPassword === null || repeatPassword ===''){
          alert('You have failed the change.')
        } else if( repeatPassword === newPassword){
          userPassword = newPassword
          alert('You have successfully changed your password. ')
        } else {
          alert('Wrong password.')
        }
      }
    } else {
      alert('Wrong password.')
    }
  } else {
    alert('You have failed the change.')
  }
}
