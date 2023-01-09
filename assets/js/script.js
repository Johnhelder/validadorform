let B7Validator = {
  handleSubmit:(event)=>{
    event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll('input');

    B7Validator.clearErros();

    for(let i=0; i<inputs.length;i++){
      let input = inputs[i];
      let check = B7Validator.checkInput(input);
      if(check !== true){
        send = false;
        B7Validator.showError(input, check);
      }
    }
    
    if(send){
      form.submit();
    }
  },
  checkInput:(input) =>{
    let rules = input.getAttribute('data-rules');
    if(rules !== null){
      rules = rules.split('|');
      for(let k in rules){
        let rDetails = rules[k].split('=');
        switch(rDetails[0]){
          case 'required':
            if(input.value == ''){
              return 'Campo não pode ser vazio.';
            }
            break;
            case 'min':
              if(input.value.length < rDetails[1]){
                return 'Campo tem que ter pelo menos ' +rDetails+ 'Caracteres';
              }
              break;
        }
      }
    }
    return true;
  },
  showError:(input, error) =>{
    input.style.borderColor = '#FF0000';

    let errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerHTML = error;

    input.parentElement.insertBefore(errorElement, input.ElementSibling);
  },
  clearErros:() =>{
    let inputs = form.querySelectorAll('input');
    for(let i=0;i<inputs.length;i++){
      inputs[i].style = '';
    }

    let errorElements = document.querySelectorAll('.error');
    for(let i=0;i<errorElements.length;i++){
      errorElements[i].remove();
    }
  }
};

let form = document.querySelector('.b7validator');
form.addEventListener('submit', B7Validator.handleSubmit);