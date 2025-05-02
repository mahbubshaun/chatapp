"use client";
import React, { useState, useEffect, useRef } from "react";
import { useChat } from "@/context/chatContext";

const MessageMain = () => {
    const { selectedChatId } = useChat();
  const receivedProfileImage = "/assets/avatar/uifaces-popular-image (7).jpg";
  const sentProfileImage = "/assets/avatar/uifaces-popular-image (3).jpg";

  const receivedProfileImage2 = "/assets/avatar/uifaces-popular-image (2).jpg";
  const sentProfileImage2 = "/assets/avatar/uifaces-popular-image (3).jpg";


  const chatData = {
    0: [
        {
          id: 0,
          name: "Elmer Laverty",
          image: receivedProfileImage2,
          class: "receivedMessageContainer",
          messageTextClass: "receivedMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "omg, this is amazing",
            },
            {
              id: 1,
              text: "perfect! ✅",
            },
            {
              id: 2,
              text: "Wow, this is really epic",
            },
          ],
        },
    
        {
          id: 1,
          name : "Florence Dorrance",
          image: sentProfileImage,
          class: "sendMessageContainer",
          messageTextClass: "sendMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "omg, this is amazing",
            },
          ],
        },
    
        {
          id: 2,
          image: receivedProfileImage2,
          class: "receivedMessageContainer",
          messageTextClass: "receivedMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "just ideas for next time",
            },
            {
              id: 1,
              text: "I'll be there in 2 mins ⏰",
            },
          ],
        },
    
        {
          id: 3,
          image: sentProfileImage,
          class: "sendMessageContainer",
          messageTextClass: "sendMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "woohoooo",
            },
            {
              id: 1,
              text: "Haha oh man",
            },
            {
              id: 2,
              text: "Haha that's terrifying 😂",
            },
          ],
        },
    
        {
          id: 4,
          image: receivedProfileImage2,
          class: "receivedMessageContainer",
          messageTextClass: "receivedMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "awh",
            },
            {
              id: 1,
              text: "omg, this is amazing",
            },
            {
              id: 2,
              text: "woohoooo 🔥",
            },
          ],
        },
      ],
    1: [
        {
          id: 5,
          name: "Florence Dorrance",
          image: receivedProfileImage,
          class: "receivedMessageContainer",
          messageTextClass: "receivedMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "This is awesome!",
            },
            {
              id: 1,
              text: "Can't wait to see more 👀",
            },
          ],
        },
        {
          id: 6,
          image: sentProfileImage,
          class: "sendMessageContainer",
          messageTextClass: "sendMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "I agree, it's amazing!",
            },
          ],
        },
        {
          id: 7,
          image: receivedProfileImage,
          class: "receivedMessageContainer",
          messageTextClass: "receivedMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "Just finished the project 🎉",
            },
            {
              id: 1,
              text: "It's a huge relief!",
            },
          ],
        },
        {
          id: 8,
          image: sentProfileImage,
          class: "sendMessageContainer",
          messageTextClass: "sendMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "That's fantastic! 👏",
            },
            {
              id: 1,
              text: "Now you can relax!",
            },
          ],
        },
        {
          id: 9,
          image: receivedProfileImage,
          class: "receivedMessageContainer",
          messageTextClass: "receivedMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "Have you checked the new update?",
            },
            {
              id: 1,
              text: "Looks great, right?",
            },
          ],
        },
        {
          id: 10,
          image: sentProfileImage,
          class: "sendMessageContainer",
          messageTextClass: "sendMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "Yes! It's awesome. So many improvements.",
            },
          ],
        },
        {
          id: 11,
          image: receivedProfileImage,
          class: "receivedMessageContainer",
          messageTextClass: "receivedMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "Are you ready for the meeting?",
            },
            {
              id: 1,
              text: "It's going to be exciting!",
            },
          ],
        },
        {
          id: 12,
          image: sentProfileImage,
          class: "sendMessageContainer",
          messageTextClass: "sendMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: "Absolutely! Let's do this!",
            },
          ],
        },
      ]
      ,
    "user3": {
      id: "user3",
      name: "Lavern Laboy",
      avatar: "/assets/avatar/uifaces-popular-image (3).jpg",
      status: "offline",
      messages: [
        { id: 1, sender: "them", text: "Did you see the new design?", timestamp: "5:10 PM" },
        { id: 2, sender: "me", text: "Yes, it looks great!", timestamp: "5:15 PM" },
        { id: 3, sender: "them", text: "Haha, thats terrifying", timestamp: "5:30 PM" },
      ]
    },
    "user4": {
      id: "user4",
      name: "Titus Kitamura",
      avatar: "/assets/avatar/uifaces-popular-image (4).jpg",
      status: "online",
      messages: [
        { id: 1, sender: "me", text: "Hey, how's the project going?", timestamp: "6:10 PM" },
        { id: 2, sender: "them", text: "It's going well! Almost done.", timestamp: "6:20 PM" },
        { id: 3, sender: "them", text: "ahh", timestamp: "6:30 PM" },
      ]
    },
    "user5": {
      id: "user5",
      name: "Alfonzo",
      avatar: "/assets/avatar/uifaces-popular-image (5).jpg",
      status: "online",
      messages: [
        { id: 1, sender: "them", text: "Can we meet tomorrow?", timestamp: "7:15 PM" },
        { id: 2, sender: "me", text: "Sure, what time?", timestamp: "7:20 PM" },
        { id: 3, sender: "them", text: "perfect!", timestamp: "7:30 PM" },
      ]
    }
  };

  console.log('selectd chat id ', selectedChatId);
  

  const [messageList, setMessageList] = useState(chatData[selectedChatId ? selectedChatId : 0]);
  const [value, setValue] = React.useState("");
  const [cardName, setName] = React.useState(chatData[selectedChatId ? selectedChatId : 0][0].name);
  
  const [cardImage, setCardImage] = React.useState(chatData[selectedChatId ? selectedChatId : 0][0].image);
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList[messageList.length - 1]].messageText);

  useEffect(() => {
    setMessageList(chatData[selectedChatId ? selectedChatId : 0]);
    setName(chatData[selectedChatId ? selectedChatId : 0][0].name);
    console.log("selected chat id changed", chatData[selectedChatId ? selectedChatId : 0][0].name);
    setCardImage(chatData[selectedChatId ? selectedChatId : 0][0].image);
  
  }, [selectedChatId]);

  function handleChange(e) {
    setValue(e.target.value);
    console.log(e.target.value);
  }

  function handleIconSubmit() {
    console.log("icon clicked");
    console.log(value);

    handleNewMessageAdd();
  }

  function handleNewMessageAdd() {
    if (messageList[messageList.length - 1].class === "sendMessageContainer") {
      console.log("new message not received, only sending");
      console.log(chatData[selectedChatId ? selectedChatId : 0]);
      handleIncrementClick(messageList.length - 1);
    } else {
      setMessageList([
        ...messageList,
        {
          id: messageList.length,
          image: sentProfileImage,
          class: "sendMessageContainer",
          messageTextClass: "sendMessageTextContainer",
          messageText: [
            {
              id: 0,
              text: value,
            },
          ],
        },
      ]);
    }

    setValue("");
  }

  function handleIncrementClick(index) {
    setMessageList((prevMessages) =>
        prevMessages.map((message, i) =>
          i === index
            ? {
                ...message,
                messageText: [
                  ...message.messageText,
                  { id: message.messageText.length, text: value },
                ],
              }
            : message
        )
      );
  }

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    console.log(formData);

    // // You can pass formData as a fetch body directly:
    // fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson.myInput);
    handleNewMessageAdd();
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.shiftKey) {
        // Shift + Enter: Add a new line
        event.preventDefault();
        setValue((prev) => prev + "\n");
      } else {
        // Enter: Submit the form
        event.preventDefault();
        if (value.trim()) {
          handleNewMessageAdd()
        }
      }
    }
  };

  const renderMessageCards = messageList.map((message) => {
    return (
      <div className={message.class} key={message.id}>
        {message.class === "receivedMessageContainer" ? (
          <>
            <div className="ProfileImageContainer">
              <img
                className="messageProfileImage"
                src={message.image}
                alt="profileImage"
              />
            </div>
            <div className={message.messageTextClass}>
              {message.messageText.map((text) => {
                return (
                  <div className="receivedMessageText" key={text.id}>
                    {text.text}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className={message.messageTextClass}>
              {message.messageText.map((text) => {
                return (
                  <div className="receivedMessageText" key={text.id}>
                    {text.text}
                  </div>
                );
              })}
            </div>
            <div className="ProfileImageContainer">
              <img
                className="messageProfileImage"
                src={message.image}
                alt="profileImage"
              />
            </div>
          </>
        )}
        <div ref={messagesEndRef} />
      </div>
    );
  });

  return (
    <div className="mainMessageContainer">
      <div className="messageTop">
        <div className="messageTopLeft">
          <div className="chatProfileImage">
            <img
              className="chatProfileImage"
              src={cardImage}
              alt="profileImage"
            />
          </div>

          <div className="messageTopLeftDetails">
            <div className="messageTopLeftName">{
              cardName
              }</div>
            <div className="onlineStatus">
              <div className="onlineStatusIcon"></div>
              <div className="onlineStatusText">Online</div>
            </div>
          </div>
        </div>
        <div className="messageTopRight">
          <div className="callIcon">
            <img src="/assets/call.svg" alt="callIcon" />
          </div>
          <div className="callText">Call</div>
        </div>
      </div>
      <div className="messageMiddle">{renderMessageCards}</div>
      <div className="messageBottom">
        <div className="inputFileIcon">@</div>

        <div className="sendMessageInput">
          <form method="post" onSubmit={handleSubmit}>
            <textarea
              value={value}
              name="myInput"
              placeholder="Type a message"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <div className="sendIcon" onClick={handleIconSubmit}>
              <img src="/assets/Iconsax (3).svg" alt="sendIcon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageMain;
