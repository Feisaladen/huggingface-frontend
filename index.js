const chatBox = document.getElementById("chatBox");
const questionInput = document.getElementById("question");
const askBtn = document.getElementById("askBtn");

// Deployed backend URL
const API_BASE = "https://huggingface-backend-3.onrender.com";

// List of banned words for kid-safe filtering
const bannedWords = [
  "sex", "violence", "drugs", "hate", "blood", "kill", "murder",
  "porn", "nsfw", "terrorist", "racist"
];

// Function to filter text
function filterText(text) {
  const lower = text.toLowerCase();
  if (bannedWords.some(word => lower.includes(word))) {
    return "Sorry, I cannot answer that question.";
  }
  return text;
}

// Function to add a message to chat
function addMessage(message, sender = "bot") {
  const msgDiv = document.createElement("div");
  msgDiv.className = sender === "bot"
    ? "bg-purple-100 text-purple-900 p-3 rounded-xl w-fit max-w-xs"
    : "bg-blue-200 text-blue-900 p-3 rounded-xl w-fit max-w-xs ml-auto";
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle user question
async function askQuestion() {
  const question = questionInput.value.trim();
  if (!question) return;

  addMessage(question, "user");
  questionInput.value = "";

  addMessage("Thinking... 🤖", "bot"); // temporary bot message

  try {
    const res = await fetch(`${API_BASE}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: question }),
    });
    const data = await res.json();

    // Remove temporary "Thinking..." message
    chatBox.lastChild.remove();

    // Filter the bot response for kid-safety
    const filteredAnswer = filterText(data[0]?.generated_text || "Sorry, no response.");
    addMessage(filteredAnswer, "bot");
  } catch (err) {
    chatBox.lastChild.remove();
    addMessage("Error contacting server.", "bot");
    console.error(err);
  }
}

// Button click
askBtn.addEventListener("click", askQuestion);

// Enter key to send
questionInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") askQuestion();
});

