function Validation(values){
    let error = {}
    const email_pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if(values.email === ""){
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email Didn't match"
    }
    else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password Didn't match"
        alert("Password must be at least of length 8, and must contain at least one lowercase, one uppercase and one special character.")
    }
    else{
        error.password = ""
    }
    return error;
}

export default Validation;