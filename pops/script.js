// Function to add messages to the chat
function addMessage(message, sender) {
    const chatMessages = document.getElementById("chatMessages");
    
    const newMessage = document.createElement("div");
    newMessage.classList.add("chat-message", sender);
    newMessage.textContent = message;

    chatMessages.appendChild(newMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the bottom
}

// Display initial message when the page loads
window.onload = function(scrollHeight) {
    addMessage("This AI was created by Qhayiya Ralarala AWWEEEHH", "bot");
};

document.getElementById("sendButton").addEventListener("click", function() {
    const input = document.getElementById("messageInput");
    const message = input.value;

    if (message.trim() !== "") {
        addMessage(message, "user");
        input.value = "hi"; // Clear the input

        // Simulate a reply after a short delay
        setTimeout(() => {
            addMessage("This is a reply to: " + message, "bot");
        }, 1000); // 1 second delay for the reply
    }
});

// Optional: Send message on Enter key
document.getElementById("messageInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("sendButton").click();
    }
});
