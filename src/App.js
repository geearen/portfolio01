import React from 'react';
import './css/main.css';
import Background from './components/Background/Background';
import Routes from './config/routes';

function App() {
  return (
    <main>
      <Routes/>
      <Background />
    </main>
  );
}

export default App;
