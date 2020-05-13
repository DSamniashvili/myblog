import React from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import HomePage from './components/Homepage';

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary> */}
        <HomePage />
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
