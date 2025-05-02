"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
const Directory = () => {

  const teamMember = [{
    id: 0,
    name: "Florencio Dorrance",
    position: "Market Development Manager",
    image: "/assets/avatar/uifaces-popular-image (7).jpg"
  },
  {
    id: 1,
    name: "Benny Spanbauer",
    position: "Area Sales Manager",
    image: "/assets/avatar/uifaces-popular-image (6).jpg"
  },
  {
    id: 2,
    name: "Jamel Eusebio",
    position: "Administrator",
    image: "/assets/avatar/uifaces-popular-image (5).jpg"
  },
  {
    id: 3,
    name: "Lavern Laboy",
    position: "Account Executive",
    image: "/assets/avatar/uifaces-popular-image (4).jpg"
  },
  {
    id: 4,
    name: "Alfonzo Schuessler",
    position: "Proposal Writer",
    image: "/assets/avatar/uifaces-popular-image (3).jpg"
  },
  {
    id: 5,
    name: "Daryl Nehls",
    position: "Nursing Assistant",
    image: "/assets/avatar/uifaces-popular-image (1).jpg"
  }]
  const files = [{
    id: 0,
    name: "i9.pdf",
    type: "PDF",
    size: "9 MB",
    image: "/assets/Frame 10.svg",
  },
  {
    id: 1,
    name: "Screenshot-3817.png",
    type: "PNG",
    size: "4 MB",
    image: "/assets/Frame 10 (3).svg"
  },
  {
    id: 2,
    name: "sharefile.docx",
    type: "DOC",
    size: "555 KB",
    image: "/assets/Frame 10 (1).svg"
  }]
  
  const renderTeamMember = teamMember.map((member) => {
    return (
      <div className="messageCard" key={member.id}>
        <div className="profileImageContainer">
          <img
            className="profileImage"
            src={member.image}
            alt="profileImage"
          />
        </div>
        <div className="cardDetails">
          <div className="cardName">{member.name}</div>
          <div className="cardMessage">{member.position}</div>
        </div>
      </div>
    )
  });
 
  const renderFiles = files.map((file) => {
    return (
      <div className="fileCard" key={file.id}>
        <div className="fileIcon">
          <img
            className="fileImage"
            src={file.image}
            alt="fileIcon"
          />
        </div>
        <div className="fileDetails">
          <div className="fileName">{file.name}</div>
          <div className="fileTypeContainer">
            <div className="fileType">
              {file.type}
            </div>
            <div className="fileSize">
              {file.size}
            </div>

        </div>
        </div>
        <div className="fileDownloadIcon">
        <img
            className="fileImage"
            src="/assets/Iconsax (2).svg"
            alt="fileDownloadIcon"
          />
        </div>
      </div>
    )
  });

  return (
    <div className="directoryContainer">
      <div className="directorySection">
        <div className="directoryHeader">
          <h2>Directory</h2>
        </div>
        <div className="directoryDropdownContainer">
          <div className="directoryDropdown">
            <FontAwesomeIcon icon={faEllipsisV} size="1x" />
          </div>
        </div>
      </div>
      <div className="teamHeader">
        <h2>Team Member</h2>
        <div className="teamCount">{teamMember.length}</div>
      </div>
      <div className="teamSection">
        <div className="teamMember">
          {renderTeamMember}
         
        </div>
      </div>
      <div className="filesSection">
        <div className="fileHeader">
          <h2>Files</h2>
          <div className="fileCount">125</div>
        </div>
        <div className="fileCardContainer">
          {renderFiles}
        </div>
      </div>
    </div>
  );
};

export default Directory;
