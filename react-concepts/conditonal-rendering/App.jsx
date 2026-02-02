import React from "react";

export default function App() {
  const [unreadMessages, setUnreadMessages] = React.useState([
    "Hello!",
    "How are you?",
    "Goodbye!",
  ]);

  const [messages, setMessages] = React.useState(["a"]);

  function determineText() {
    if (messages.length === 0) {
      return "You're all caught up!";
    } else if (messages.length === 1) {
      return "You have 1 unread message";
    } else {
      return `You have ${messages.length} unread messages`;
    }
  }

  return (
    <>
      <div>
        {unreadMessages.length > 0 && (
          <h1>You have {unreadMessages.length} unread messages!</h1>
        )}
      </div>
      <br />
      <br />
      <div>
        <h2>{determineText()}</h2>
      </div>
    </>
  );
}
