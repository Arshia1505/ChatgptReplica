const express = require('express');
const cors = require('cors');



app.use(express.json());
app.use(cors());


// Simulate a response from the bot (you can replace this with actual AI logic later)
/*
function getBotResponse(userMessage) {
    return `I'm just a bot, but your message was: ${userMessage}`;
}
*/



const { OpenAI } = require('openai');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
const openai = new OpenAI({
    apiKey: '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' // Use your OpenAI API key here
});

async function getBotResponse(userMessage) {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }],
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching AI response:', error);
        return 'Sorry, I couldn’t process your request.';
    }
}

app.post('/send-message', async (req, res) => {
    const userMessage = req.body.message;
    if (!userMessage || userMessage.trim() === '') {
        return res.status(400).send('Message is required');
    }

    const botMessage = await getBotResponse(userMessage);
    return res.json({ message: botMessage });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



/*
// POST endpoint to receive user messages and send bot responses
app.post('/send-message', (req, res) => {
    const userMessage = req.body.message;
    
    if (!userMessage || userMessage.trim() === '') {
        return res.status(400).send('Message is required');
    }
    
    const botMessage = getBotResponse(userMessage);  // Get bot response
    return res.json({ message: botMessage });  // Send response back to the frontend
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
*/
