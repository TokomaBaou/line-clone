import { useEffect } from "react";
import { Line } from "./SignOut.js";
import { db } from "../firebase.js";
export const Line = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <>
      <SignOut />
      <div>
        <div></div>
      </div>
    </>
  );
};
