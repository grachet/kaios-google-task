import React from 'react';
import './App.scss';
import CheckboxListItem from './components/CheckboxListItem/CheckboxListItem';
import { SoftKeyProvider } from './components/SoftKey/SoftKeyProvider';
import { ToastContextProvider } from './contexts/toastContext';
import ListView from './views/ListView/ListView';
import TabView from './views/TabView/TabView';

function App() {

  const App = () => {
    // const { showToast } = useContext(ToastContext);
    return (
      <div className="App">
        <SoftKeyProvider

        >
          <div className="content">
            <TabView
              tabLabels={[
                'Task list 1',
                'Task list 2'
              ]}
            >
              <ListView>
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
              </ListView>
              <ListView>
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
                <CheckboxListItem
                  primary="Hello primary text"
                  secondary="seconday text"
                  initCheckboxVal={false}
                  checkboxSide="left"
                />
              </ListView>
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
