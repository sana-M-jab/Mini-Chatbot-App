const Chatbot = {
  defaultResponses: {
    'hello': 'Hello! 👋',
    'help': 'I can help you learn React!',
    'react': 'React is a JavaScript library for building UIs.',
    'anything else': 'Sorry, I don\'t understand 😕'
  },

  getResponse: function (message) {
    const lowerMessage = message.toLowerCase().trim();
    
    if (this.defaultResponses[lowerMessage]) {
      return this.defaultResponses[lowerMessage];
    }
    
    return 'I don\'t understand that. Try: hello, help, or react';
  },

  getResponseAsync: function (message) {
    // simulate async API call with a small delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.getResponse(message));
      }, 700);
    });
  }
};

window.chatbot = Chatbot;

