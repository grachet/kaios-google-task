import React, { useEffect, useState } from "react";
import { Header, Input, Softkey, ToDos } from "./components";
import { useNavigation } from "./hooks";
// import taskService from "./service/taskService";
import { useGoogleLogin } from 'react-google-login'

export default function App() {

  const [isSignedIn, setSignedIn] = useState(false);

  const { signIn, loaded } = useGoogleLogin({
    clientId: config.clientI,
    onSuccess: (rep) => {
      console.log(rep)
    },
    // onAutoLoadFinished,
    // clientId,
    cookiePolicy: "none",
    // loginHint,
    // hostedDomain,
    // autoLoad,
    isSignedIn: true,
    // fetchBasicProfile,
    redirectUri: "http://localhost:3000",
    // discoveryDocs,
    onFailure: (rep) => {
      console.log(rep)
    },
    uxMode: "redirect",
    scope: 'https://www.googleapis.com/auth/tasks',
    // accessType,
    // responseType,
    // jsSrc,
    onRequest: (rep) => {
      console.log(rep)
    },
    // prompt
  })

  const sign = () => {
    console.log(loaded, signIn)
    loaded && signIn()
    // taskService.init()
  }

  return (
    <>
      <Header title="Google task 2" />

      <button onClick={() => sign()}>Sign</button>

      <Softkey
        left={isSignedIn ? null : "Sign In"}
        onKeyLeft={() => {
          sign()
        }}
      />
    </>
  );
}
