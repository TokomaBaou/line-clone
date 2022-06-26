import { Button } from "@material-ui/core";

export const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.SignInWithPopup(provider);
  };

  return (
    <>
      <Button onClick={signInWithGoogle}>Googleでログイン</Button>
    </>
  );
};
