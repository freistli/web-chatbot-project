// This file contains the JavaScript code that handles the functionality of showing and hiding the chatbot when the bubble icon is clicked.

document.addEventListener('DOMContentLoaded', function() {
    const chatbotIframe = document.getElementById('chatbot-iframe');
    const toggleButton = document.getElementById('bubble-icon');

    toggleButton.addEventListener('click', function() {
        if (chatbotIframe.style.display === 'none' || chatbotIframe.style.display === '') {
            chatbotIframe.style.display = 'block';
        } else {
            chatbotIframe.style.display = 'none';
        }
    });
});