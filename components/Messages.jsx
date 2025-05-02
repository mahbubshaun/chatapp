"use client";

import React, { useState } from "react";

import { useChat } from "@/context/chatContext";
const Messages = () => {
  const { setSelectedChatId } = useChat();
  const [status, setStatus ] = useState("read");
  const [messageCards, setMessageCards] = useState([
    {
      id: 0,
      name: "Elmer Laverty",
      message: "Haha oh",
      time: "2:30 PM",
      image: "/assets/avatar/uifaces-popular-image (2).jpg",
      status: "read",
      badges: [{
        id: 0,
        name: "Question",
        class: "question",
      },
      {
        id: 1,
        name: "Help Wanted",
        class: "help",
      }],
    },
    {
      id: 1,
      name: "Florence Dorrance",
      message: "woohoooo",
      time: "4:30 PM",
      image: "/assets/avatar/uifaces-popular-image (7).jpg",
      status: "read",
      badges: [{
        id: 0,
        name: "Question",
        class: "question",
      },
      {
        id: 1,
        name: "Help Wanted",
        class: "help",
      }],
    },
    // {
    //   id: 2,
    //   name: "Lavern Laboy",
    //   message: "Haha, thats terrifying",
    //   time: "5:30 PM",
    //   image: "/assets/avatar/uifaces-popular-image (3).jpg",
    //   status: "read",
    //   badges: [{
    //     id: 0,
    //     name: "Bug",
    //     class: "question",
    //   },
    //   {
    //     id: 1,
    //     name: "Hacktoberfest",
    //     class: "help",
    //   }]
    // },
    // {
    //   id: 3,
    //   name: "Titus Kitamura",
    //   message: "ahh",
    //   time: "6:30 PM",
    //   image: "/assets/avatar/uifaces-popular-image (4).jpg",
    //   status: "read",
    //   badges: [{
    //     id: 0,
    //     name: "Request",
    //     class: "help",
    //   }
    // ]
    // },
    // {
    //   id: 4,
    //   name: "Alfonzo",
    //   message: "perfect!",
    //   time: "7:30 PM",
    //   image: "/assets/avatar/uifaces-popular-image (5).jpg",
    //   status: "read",
    //   badges: [{
    //     id: 0,
    //     name: "Question",
    //     class: "question",
    //   },
    //   {
    //     id: 1,
    //     name: "Help Wanted",
    //     class: "help",
    //   }],
    // }, 
  ]);
  
  const renderMessageCards = messageCards.map((card) => {
    return (
    
      <div className={`messageCard ${card.status}`} key={card.id}  onClick={() => handleChatSelect(card.id)}>
      <div className="profileImageContainer">
        <img
          className="profileImage"
          src={card.image}
          alt="profileImage"
        />
      </div>
      <div className="cardDetails">
        <div className="cardName">{card.name}</div>
        <div className="cardMessage">{card.message}</div>
        <div className="cardBadges">
          {card.badges.map(badge => {
            return (
              <div className={`badge ${badge.class}`} key={badge.id}>
                {badge.name}
              </div>

            )

          }
          )}
        </div>
      </div>
      <div className="cardTime">
        <div className="time">{card.time}</div>
      </div>
    </div>

    );
  });

  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
    console.log(`Selected chat: ${chatId}`);
    setMessageCards((prevCards) =>
      prevCards.map((card) =>
        card.id === chatId
          ? { ...card, status: "selected" }
          : { ...card, status: "notSelected" }
      )
    );
  };
  
  return (
    <div className="messagesContainer">
      <div className="topSection">
        <div className="unreadMessageContainer">
          <div className="messageHeaderText">Messages</div>
          <div className="messageIcon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.28 5.96667L8.93333 10.3133C8.42 10.8267 7.58 10.8267 7.06667 10.3133L2.72 5.96667"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="messageCount">12</div>
        </div>
        <div className="messageAddButton">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3.33334C10.8167 3.33334 3.33334 10.8167 3.33334 20C3.33334 29.1833 10.8167 36.6667 20 36.6667C29.1833 36.6667 36.6667 29.1833 36.6667 20C36.6667 10.8167 29.1833 3.33334 20 3.33334ZM26.6667 21.25H21.25V26.6667C21.25 27.35 20.6833 27.9167 20 27.9167C19.3167 27.9167 18.75 27.35 18.75 26.6667V21.25H13.3333C12.65 21.25 12.0833 20.6833 12.0833 20C12.0833 19.3167 12.65 18.75 13.3333 18.75H18.75V13.3333C18.75 12.65 19.3167 12.0833 20 12.0833C20.6833 12.0833 21.25 12.65 21.25 13.3333V18.75H26.6667C27.35 18.75 27.9167 19.3167 27.9167 20C27.9167 20.6833 27.35 21.25 26.6667 21.25Z"
              fill="#615EF0"
            />
          </svg>
        </div>
      </div>
      <div className="searchSection">
        <input type="text" placeholder="Search Messages" />
      </div>
      <div className="messageSection">
        {renderMessageCards}

      </div>
    </div>
  );
};

export default Messages;
