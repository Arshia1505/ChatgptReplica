// function sendMessage() {
//     const userInput = document.getElementById('user-input').value;
//     if (userInput.trim() === '') return;

//     addMessage('user', userInput);
//     document.getElementById('user-input').value = '';

//     setTimeout(() => {
//         const botResponse = 'This is a simulated response from ChatGPT.';
//         addMessage('bot', botResponse);
//     }, 1000);
// }

// function addMessage(sender, message) {
//     const chatMessages = document.getElementById('chat-messages');
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('chat-message', sender);
//     messageElement.textContent = message;
//     chatMessages.appendChild(messageElement);
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// }


function appendMessage(content, sender) {
    const chatBox = document.getElementById('chatBox');
    
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    

    const message = document.createElement('div');
    message.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    message.textContent = content;


    messageDiv.appendChild(message);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


function sendMessage(event) {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
        const userMessage = event.target.value;
        event.target.value = ''; 

    
        appendMessage(userMessage, 'user');
        
        
        setTimeout(() => {
            const botMessage = "I'm just a bot, but your message was: " + userMessage;
            appendMessage(botMessage, 'bot');
        }, 1000); 
    }
}
