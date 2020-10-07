import React, { useEffect, useState } from "react";
import config from "./config.json"
import { Header, Input, Softkey, ToDos } from "./components";
import { useNavigation } from "./hooks";
// import taskService from "./service/taskService";
import { useGoogleLogin } from 'react-google-login'
import { isLocalhost } from "./service/helperFunctions";

export default function App() {

  const [isSignedIn, setSignedIn] = useState(false);

  const { signIn, loaded } = useGoogleLogin({
    clientId: config.web.client_id,
    onSuccess: (rep) => {
      console.log(rep)
      setSignedIn(true)
    },
    // onAutoLoadFinished,
    // clientId,
    // cookiePolicy: "none",
    // loginHint,
    // hostedDomain,
    // autoLoad,
    isSignedIn: true,
    // fetchBasicProfile,
    redirectUri: !!isLocalhost ? "http://localhost:3000" : "https://grachet.github.io/kaios-google-task",
    // discoveryDocs,
    onFailure: (error) => {
      console.error(error)
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
