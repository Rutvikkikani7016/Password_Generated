import React from 'react';
import './App.css';
import PasswordGenerator from './components/PasswordGenerator';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PasswordGenerator />
      </div>
    </Provider>
  );
}

export default App;


