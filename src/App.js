import React, { useEffect, useState } from "react";
import config from "./config.json"
import { Header, Input, Softkey, ToDos } from "./components";
import { useNavigation } from "./hooks";
import taskService from "./service/taskService";
import { useGoogleLogin } from 'react-google-login'
import { isLocalhost } from "./service/helperFunctions";

export default function App() {

  const [isSignedIn, setSignedIn] = useState(false);
  const [taskList, setTaskList] = useState(false);

  const { signIn, loaded } = useGoogleLogin({
    clientId: config.web.client_id,
    onSuccess: async (rep) => {
      console.log(rep)
      await taskService.init()
      let listTaskLists = await taskService.listTaskLists()
      setTaskList(listTaskLists)
      setSignedIn(true)
    },
    isSignedIn: true,
    // cookiePolicy:'none',
    redirectUri: !!isLocalhost ? "http://localhost:3000" : "https://grachet.github.io/kaios-google-task",
    onFailure: (error) => {
      console.error(error)
    },
    uxMode: "redirect",
    scope: 'https://www.googleapis.com/auth/tasks',
  })

  console.log(taskList)

  const sign = () => {
    loaded && signIn()
  }

  return (
    <>
      {!!isLocalhost && <button onClick={() => sign()}>Sign</button>}

      {JSON.stringify(taskList)}

      <Softkey
        left={isSignedIn ? null : "Sign In"}
        onKeyLeft={() => {
          sign()
        }}
      />
    </>
  );
}
