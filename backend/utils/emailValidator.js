export const validateEmail = (email)=> {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!emailPattern.test(email)) throw new Error("Email is invalid. Kindly register with a valid email address.");
    
}