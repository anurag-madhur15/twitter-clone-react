import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
      {/* <h1>Let's create twitter... and have fun</h1> */}
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
