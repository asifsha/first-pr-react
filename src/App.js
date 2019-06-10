import React from 'react';
import './App.css';
import { TextInput } from './components/TextInput';
import { LabelInput } from './components/LabelInput';

function ComponentList(props) {

  const listItems = props.components.map((component) =>
    <li>{component}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function App() {

  const componentList = [
    <TextInput placeholder='type' />,
    <LabelInput label='My label' />,

  ];
  return (
    <div >
      Below is the list of controls
      <ComponentList components={componentList} />
    </div>
  );
}

export default App;
