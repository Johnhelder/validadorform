let B7Validator = {
  handleSubmit:(event)=>{
    event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll('input');

    for(let i=0; i<inputs.length;i++){
      let input = inputs[i];
      let check = B7Validator.checkInput(input);
      if(check !== true){
        send = false;
        //exibri o erro
      }
    }
  }
}

let form = document.querySelector('.b7validator');
form.addEventListener('submit', B7Validator.handleSubmit);