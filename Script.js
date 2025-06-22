const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

let conversationHistory = [];

const systemPrompt = {
  role: "system",
  content: "You are a friendly and helpful AI assistant."
};
conversationHistory.push(systemPrompt);


chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userMessage = userInput.value.trim();

    if (!userMessage) {
        return;
    }

    addMessageToChatBox('user', userMessage);
    conversationHistory.push({ role: 'user', content: userMessage });
    userInput.value = '';

    const typingIndicator = addTypingIndicator();
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const recentHistory = conversationHistory.slice(-10);
        
        const completion = await websim.chat.completions.create({
            messages: [systemPrompt, ...recentHistory],
        });

        const botResponse = completion.content;
        
        chatBox.removeChild(typingIndicator);

        addMessageToChatBox('bot', botResponse);
        conversationHistory.push(completion);

    } catch (error) {
        console.error('Error fetching AI response:', error);
        if (typingIndicator.parentNode === chatBox) {
            chatBox.removeChild(typingIndicator);
        }
        addMessageToChatBox('bot', 'Sorry, I seem to be having some trouble. Please try again later.');
    }
});

function addMessageToChatBox(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    
    const p = document.createElement('p');
    p.textContent = message;
    messageElement.appendChild(p);
    
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addTypingIndicator() {
    const typingElement = document.createElement('div');
    typingElement.classList.add('message', 'bot-message', 'typing-indicator');
    
    const p = document.createElement('p');
    p.textContent = 'Typing...';
    typingElement.appendChild(p);

    chatBox.appendChild(typingElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    return typingElement;
}

