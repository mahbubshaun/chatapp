import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import Messages from "@/components/Messages";
import Directory from "@/components/Directory";
import MessageMain from "@/components/MessageMain";

export default function Home() {
  return (
    <div className="mainContainer">
      <Sidebar />
      <Messages />
      <Directory />
      <MessageMain />


    </div>
  );
}
