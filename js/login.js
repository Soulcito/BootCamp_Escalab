function handleLogin() {
  
  //  VARIABLES

   var user = document.getElementById('user');
   var password = document.getElementById('password');
   var alertUser = document.getElementById('alertUser');
   var alertPass = document.getElementById('alertPassword');
   var login = document.getElementById('userPassInvalid');
   var link = document.getElementById('link');

  //  VALIDACION DE DATOS REQUERIDOS

   if ( user.value == '' || user.value == null ) {
       alertUser.style.display = 'flex';
   } else {
       alertUser.style.display = 'none';
   }

   if ( password.value == '' || password.value == null ) {
       alertPass.style.display = 'flex';
   }else {
       alertPass.style.display = 'none';
   }

  //  VALIDACION DE USER Y PASSWORD

  if ( user.value != '' && user.value != null && password.value != '' && password.value != null ){
    if ( !(user.value == 'admin' && password.value == '123456') ) {
       login.style.display = 'flex';
    } else {
       login.style.display = 'none';
       user.value = '';
       password.value = '';
       link.click();
    }
  }

}