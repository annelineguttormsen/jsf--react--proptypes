import React from 'react';

// import component
import Heading from './Heading.js';
import Image from './Image.js';
import Repeater from './Repeater.js';
import ShowHide from './ShowHide.js';

export default function App() {
  return (
    <div className="App">
      <Heading text="Noroff Task"></Heading>
      <Image source="#" alternativeText="Alternativ tekst"/>
      <Repeater count={3}>
        <p>Jeg er child</p>  
      </Repeater> 
      <ShowHide show={true}>
        <p>Jeg er synlig</p>
      </ShowHide>
      <ShowHide show={false}>
        <p>Jeg er synlig</p>
      </ShowHide>
    </div>
  );
}
