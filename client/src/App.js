import React from 'react';
import './App.css';
import DownloadButton from './components/DownloadButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Other components */}
        <DownloadButton S3URL="/download" />
      </header>
    </div>
  );
}

export default App;
