import React, { useContext, useEffect, useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import './App.scss';
import CheckboxListItem from './components/CheckboxListItem/CheckboxListItem';
import { SoftKeyProvider } from './components/SoftKey/SoftKeyProvider';
import ToastContext, { ToastContextProvider } from './contexts/toastContext';
import taskService from './services/taskService';
import config from './services/config.json';
import ListView from './views/ListView/ListView';
import TabView from './views/TabView/TabView';
import { isLocalhost } from "./services/helperFunctions"
import ProgressBar from './components/ProgressBar/ProgressBar';

function App() {

  const [isSignedIn, setSignedIn] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const { signIn, loaded } = useGoogleLogin({
    clientId: config.client_id,
    onSuccess: async (rep) => {
      await taskService.init()
      setTaskList(await taskService.getAllTaskList())
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

  useEffect(() => {
    !isSignedIn && loaded && signIn()
  }, []);

  const App = () => {
    const { showToast } = useContext(ToastContext);
    return (
      <div className="App">
        {!taskList.length && <ProgressBar
          header={'Fetching tasks...'}
          percentage={30}
          type={"buffer"}
        />}
        <SoftKeyProvider>
          <div className="content">
            <TabView
              tabLabels={taskList.map(list => list.title)}
            >
              {taskList.map((list, i) => <ListView key={i}>
                {
                  list.tasks.map((task, ti) => <CheckboxListItem
                    key={ti}
                    primary={task.title}
                    initCheckboxVal={task.status === "completed"}
                    checkboxSide="left"
                    onInputChange={(isChecked) => {
                      taskService.updateTask({
                        ...task,
                        taskListId: list.id,
                        taskId: task.id,
                        status: isChecked ? "completed" : "needsAction"
                      }).then(rep => {
                        showToast("Google Task updated", 1000)
                      })
                        .catch(err => {
                          showToast("Fail to update Google Task", 1000)
                        })
                    }}
                  />)
                }
              </ListView>
              )}
            </TabView>
          </div>
        </SoftKeyProvider>
      </div >
    );
  }

  return (
    <ToastContextProvider>
      <App />
    </ToastContextProvider>
  );
}

export default App;
