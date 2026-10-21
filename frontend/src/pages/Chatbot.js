import { useState } from "react";

function Chatbot() {
    const [messages, setMessages] = useState([
        { text: "Namaste! I am your AI herbal guru 🌿", type: "bot" }
    ]);

    const send = (text) => {
        setMessages([...messages, { text, type: "user" }]);

        setTimeout(() => {
            setMessages(m => [...m, {
                text: "This is a demo response 🌿",
                type: "bot"
            }]);
        }, 1000);
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((m, i) => (
                    <div key={i} className={`msg ${m.type}`}>
                        <div className="msg-bubble">{m.text}</div>
                    </div>
                ))}
            </div>

            <input
                className="chat-input"
                placeholder="Ask something..."
                onKeyDown={(e) => {
                    if (e.key === "Enter") send(e.target.value);
                }}
            />
        </div>
    );
}

export default Chatbot;