      const firstName = document.forms["signUpForm"]["fname"];
      const lastName = document.forms["signUpForm"]["lname"];
      const email = document.forms["signUpForm"]["email"];
      const password = document.forms["signUpForm"]["password"];
      const submit =  document.querySelector("input[type=submit]");
      const errors = document.querySelectorAll(".error-message");
      const fields = document.querySelectorAll(".field");
      const fieldNames = ["First name", "Last name", "Email", "Password"]; 
      const validFormats = [/^[a-zA-Z ]+$/,/^[a-zA-Z ]+$/ ,
         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/]; 

      const onFocus = (e) => {
        let element = e.target;
        element.classList.remove("invalid");
        element.value = "";
        element.nextSibling.nextElementSibling.innerHTML = "";
      }

      const handleSubmit = (fields) => {
        if(fields === 4) 
        document.getElementById("user").innerHTML = 
        "Welcome <span> " + firstName.value + " " + lastName.value + " </span> !";
      }

      const formValidation = ( formValues) => {
        let numberOfValidFields = 0;
        for(let i=0; i < 4; i++){
         if(formValues[i] == ""){
          errors[i].innerHTML = `${fieldNames[i]} cannot be empty`;
          fields[i].classList.add("invalid");
         }else{
          if(!formValues[i].match(validFormats[i])){
            errors[i].innerHTML = `Looks like this is not a valid ${fieldNames[i]}`;
            fields[i].classList.add("invalid");
          }else{
            numberOfValidFields++;
            errors[i].innerHTML = "";
            fields[i].classList.remove("invalid");
          }
         }
       }
       return numberOfValidFields;
      }
      const onSubmit = (e) => {
        e.preventDefault();
        const formValues = [firstName.value, lastName.value, email.value, password.value];  
        let validFields =  formValidation( formValues);
        handleSubmit(validFields);
       }
       
       fields.forEach(field => field.addEventListener('focus', onFocus));
       submit.addEventListener("click", onSubmit);
