import React from 'react';
import CounterGroup from './component/CounterGroup/Index'
import store from './store'
import './App.css';

function App() {
  return (
    <div className="App" store={store}>
      <CounterGroup className="center_box" />
    </div>
  );
}

export default App;
