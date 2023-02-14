import * as React from 'react';
import Header from './components/Header';
import Todolist from './components/Todolist';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

function App() {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Header onTabChange={setTabIndex} tabIndex={tabIndex} />
        {tabIndex === 0 && (
          <div style={{textAlign: 'center'}}>
            <h1>Welcome to the TODO app!</h1>
            <h4>click the TODO text on top to get to the application! </h4>
          </div>
        )}
        {tabIndex === 1 && <Todolist />}
      </LocalizationProvider>
    </div>
  );
}

export default App;
