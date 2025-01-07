"use client";
import { useEffect } from "react";

const ChatAI = () => {
  useEffect(() => {
    const scriptId = "df-messenger-script";
    const existingScript = document.getElementById(scriptId);

    // Kiểm tra xem component 'df-messenger' đã được đăng ký chưa
    if (!window.customElements.get("df-messenger")) {
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src =
          "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
        script.async = true;
        script.onload = () => {
          console.log("Dialogflow script loaded");
        };
        document.body.appendChild(script);
      }
    }

    // Clean up script khi component unmount
    return () => {
      const script = document.getElementById(scriptId);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="AI-CHATBOX"
      agent-id="aad2531b-5919-4d94-83ce-ab73d9202161"
      language-code="vi"
    ></df-messenger>
  );
};

export default ChatAI;
