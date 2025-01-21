
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

        fetch('http://localhost:3000/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userMessage }),
        })
        .then(response => response.json())
        .then(data => {
            // Display the bot's response
            const botMessage = data.message;
            appendMessage(botMessage, 'bot');
        })
        .catch(error => {
            console.error('Error:', error);
            appendMessage("Sorry, something went wrong.", 'bot');
        });
    }
}
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

