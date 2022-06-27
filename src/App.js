import "./styles.css";
import { SignIn } from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks";
import { auth } from "./firebase.js";
import { Line } from "./components/Line.js";

export const App = () => {
  const user = useAuthState(auth);
  return <div className="App">{user ? <Line /> : <SignIn />}</div>;
};
