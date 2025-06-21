document.addEventListener('DOMContentLoaded', () => {
    const pages = {
        discover: document.getElementById('discover-page'),
        myChats: document.getElementById('my-chats-page'),
        create: document.getElementById('create-chatbot-page'),
        chat: document.getElementById('chat-page'),
        profile: document.getElementById('profile-page'),
        settings: document.getElementById('settings-page'),
    };

    const navDiscover = document.getElementById('nav-discover');
    const navMyChats = document.getElementById('nav-my-chats');
    const navCreate = document.getElementById('nav-create');
    const navProfile = document.getElementById('nav-profile');
    const navSettings = document.getElementById('nav-settings');
    const createForm = document.getElementById('create-chatbot-form');
    
    const chatbotList = document.getElementById('chatbot-list');
    const noChatbotsMessage = document.getElementById('no-chatbots-message');
    
    const myChatList = document.getElementById('my-chat-list');
    const noMyChatsMessage = document.getElementById('no-my-chats-message');

    const chatWithName = document.getElementById('chat-with-name');
    const chatHeaderImage = document.getElementById('chat-header-image');
    const chatMessagesContainer = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
  
