const loginBtn = document.getElementById('login_button');
loginBtn.addEventListener('click', loginBtnClicked);

function loginBtnClicked(event){
    event.preventDefault();

    const pnNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin_number').value;

   if(pnNumber === '572' && pinNumber === '1234'){
    window.location.href = './home.html'
   }else{
    alert('Phone or pin number is wrong!')
   }
}