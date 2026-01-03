const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    botReply(message);
  }, 500);
}

function addMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userText) {
  let reply = "I'm just a demo bot 🤖";

  if (userText.toLowerCase().includes("hello")) {
    reply = "Hello! 😊";
  } else if (userText.toLowerCase().includes("help")) {
    reply = "Sure! Tell me what you need help with.";
  } else if (userText.toLowerCase().includes("bye")) {
    reply = "Goodbye! 👋";
  }

  addMessage(reply, "bot");
}

// Enter key support
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
