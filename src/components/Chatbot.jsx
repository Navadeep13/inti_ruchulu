import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Inti Ruchulu! 🍛 I'm here to help you with any questions about our authentic South Indian cuisine. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const botResponses = {
    // Greetings
    'hello': "Hello! Welcome to Inti Ruchulu! How can I help you today? 😊",
    'hi': "Hi there! Thanks for visiting Inti Ruchulu. What would you like to know about our delicious South Indian food?",
    'good morning': "Good morning! Start your day right with our authentic South Indian breakfast items! 🌅",
    'good evening': "Good evening! Perfect time to order some delicious dinner from our menu! 🌆",
    
    // Menu & Food
    'menu': "Our menu features authentic South Indian dishes including dosas, idlis, biryanis, curries, and traditional sweets. You can browse our full menu above! 🍽️",
    'what do you serve': "We serve authentic South Indian cuisine including breakfast items like idli and dosa, lunch/dinner options like biryani and curries, snacks, beverages, and traditional desserts! 🥘",
    'popular dishes': "Our most popular dishes include Chicken Biryani, Masala Dosa, Sambar Rice, Rasam, and our special Inti Ruchulu Thali! 🌟",
    'vegetarian': "Yes! We have plenty of vegetarian options including dosas, idlis, vegetable curries, sambar, rasam, and traditional sweets! 🥬",
    'spicy food': "We offer dishes with varying spice levels! You can request mild, medium, or spicy when ordering. Our chefs are happy to adjust the heat level! 🌶️",
    'breakfast': "Our breakfast menu includes idli, dosa, vada, upma, pongal, and various chutneys. Available from 8:00 AM! 🌅",
    
    // Ordering & Delivery
    'how to order': "You can order directly through our website! Just browse the menu, add items to cart, and proceed to checkout. We accept cash on delivery, card, and UPI payments! 📱",
    'delivery time': "Our typical delivery time is 30-45 minutes. You can track your order in real-time once it's confirmed! ⏰",
    'delivery area': "We deliver throughout Dharmavaram and surrounding areas. Enter your address during checkout to confirm delivery availability! 🚚",
    'minimum order': "Our minimum order value is ₹150 for delivery. No minimum for pickup orders! 💰",
    'payment methods': "We accept Cash on Delivery (COD), Credit/Debit Cards, UPI, and all major digital payment methods! 💳",
    
    // Restaurant Info
    'location': "We're located at Kalajyothi, Dharmavaram, Andhra Pradesh 515671. You can also order online for delivery! 📍",
    'hours': "We're open Monday to Sunday from 8:00 AM to 10:00 PM. We deliver fresh meals throughout the day! 🕐",
    'contact': "You can reach us at +91 7989630780 or email info@intiruchulu.com for any queries! 📞",
    'about': "Inti Ruchulu specializes in authentic South Indian cuisine, bringing you traditional flavors with modern convenience. We've been serving delicious homestyle meals with love! ❤️",
    
    // Default responses
    'thank you': "You're welcome! Is there anything else I can help you with? We're always here to assist! 😊",
    'bye': "Thank you for visiting Inti Ruchulu! We hope to serve you soon. Have a great day! 👋"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(botResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    // Check for partial matches
    if (message.includes('price') || message.includes('cost') || message.includes('rate')) {
      return "Our prices are very reasonable! You can see the exact prices for each item in our menu above. Most items range from ₹50 to ₹300! 💰";
    }
    
    if (message.includes('order') && message.includes('track')) {
      return "You can track your order by clicking the tracking icon (📍) in the navigation bar or through the profile menu! 📱";
    }
    
    if (message.includes('cancel') || message.includes('refund')) {
      return "For order cancellations or refunds, please contact us at +91 7989630780. We'll be happy to help you! 📞";
    }
    
    // Default response
    return "I'm here to help! You can ask me about our menu, delivery, timings, location, or anything else about Inti Ruchulu. Try asking about our popular dishes or delivery options! 🤔";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: findBestResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What's on the menu?",
    "Delivery time?",
    "Popular dishes",
    "Vegetarian options",
    "Contact info"
  ];

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Button */}
      <button 
        className="fab" 
        onClick={() => setIsOpen(true)}
        style={{ 
          bottom: '14rem',
          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
          fontSize: '1.2rem'
        }}
        title="Chat with us"
      >
        💬
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="modal active">
          <div className="modal-content" style={{ 
            maxWidth: '400px', 
            width: '90%', 
            height: '600px',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '0'
          }}>
            {/* Chat Header */}
            <div style={{
              background: 'linear-gradient(135deg, #4CAF50, #45a049)',
              padding: '1rem',
              borderRadius: '20px 20px 0 0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ color: 'white', margin: 0, fontSize: '1.1rem' }}>
                  Inti Ruchulu Assistant
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.8rem' }}>
                  Online • Ready to help
                </p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '1.2rem'
                }}
              >
                ×
              </button>
            </div>

            {/* Messages Area */}
            <div style={{
              flex: 1,
              padding: '1rem',
              overflowY: 'auto',
              background: 'rgba(255,255,255,0.02)'
            }}>
              {messages.map(message => (
                <div 
                  key={message.id}
                  style={{
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    marginBottom: '1rem'
                  }}
                >
                  <div style={{
                    maxWidth: '80%',
                    padding: '0.8rem 1rem',
                    borderRadius: message.sender === 'user' ? '15px 15px 5px 15px' : '15px 15px 15px 5px',
                    background: message.sender === 'user' 
                      ? 'linear-gradient(135deg, #ff9f43, #ff6348)'
                      : 'rgba(255,255,255,0.1)',
                    color: 'white',
                    fontSize: '0.9rem',
                    lineHeight: 1.4
                  }}>
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div style={{
                padding: '0 1rem',
                borderTop: '1px solid rgba(255,255,255,0.1)'
              }}>
                <p style={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  fontSize: '0.8rem', 
                  margin: '0.5rem 0',
                  textAlign: 'center'
                }}>
                  Quick questions:
                </p>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '15px',
                        padding: '0.4rem 0.8rem',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.7rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'rgba(76, 175, 80, 0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.1)';
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div style={{
              padding: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.02)'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  style={{
                    flex: 1,
                    padding: '0.8rem',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '20px',
                    color: 'white',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  style={{
                    background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;