import React from "react";

import TestComponent from "./TestComponent";



function App() {
  console.log("App rendering without context");

  return (
    <div className="app" style={{ backgroundColor: 'white' }}>
      <TestComponent />
    </div>
  );
}

export default App;
