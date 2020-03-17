import React from 'react';

// import component
import ExampleComponent from './ExampleComponent.js';

export default function App() {
  return (
    <div className="App">
      <h1>Noroff Task</h1>

      {/* EXAMPLE with props the validate */}
      <ExampleComponent
      // we used "" instead of {} to pass in strings
      heading="Example component heading"
      // we must use {} instead of "" to pass in NON-strings
      isAmazingComponent={true}>
        <p>passing in child elements is required</p>
      </ExampleComponent>

      {/* EXAMPLE with props the validate - uncomment it to show the errors */}
      {/* <ExampleComponent heading="Look in the console to see warnings about proptype valdation failures" />*/}

    </div>
  );
}
