function errorMessageComponent(error){
    const message = document.createElement("p");
    message.classList.add("error-message")
    message.textContent = `${error.message}`
    return message;
}

export { errorMessageComponent }