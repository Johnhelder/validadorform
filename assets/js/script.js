let B7Validator = {
  handleSubmit:(event)=>{
    event.preventDefault();
  }
}

let form = document.querySelector('.b7validator');
form.addEventListener('submit', B7Validator.handleSubmit);