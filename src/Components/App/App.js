import { useState } from 'react';
import "./App.css";
import BlockCountainer from '../BlockConatiner/BlockCountainer';
import Form from '../Form/Form';
import {data} from '../../Constants/Data';

const App = () => {
  const [idCounter, setIdCounter] = useState(2);
  const [length, setLength] = useState(1);
  const [blocks, setBlocks] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    let submittedLength = +length;
    const allBlocks = [...blocks].map((item) => {
      if (item.empty && submittedLength > 0) {
        item.id = idCounter;
        item.empty = false;
        submittedLength -= 1;
        return item;
      } else {
        return item;
      }
    });
    if (submittedLength > 0) {
      for (let i = 0; i < submittedLength; i++) {
        allBlocks.push({id: idCounter, empty: false})
      };
    };
    setIdCounter(idCounter + 1);
    setBlocks(allBlocks);
  };

  const handleClick = (e) => {
    const id = +e.target.id;
    const item = blocks.find(element => element.id === id);
    if (item.empty) return;
    let allBlocks = [...blocks];
    switch (e.detail) {
      case 1:
        allBlocks = allBlocks.map((item) => {
          if (item.id === id) {
            item.light = item.light ? false : true;
            return item;
          } else {
            item.light = false;
            return item;
          }
        });
        setBlocks(allBlocks);
        break;
      case 2:
        allBlocks = allBlocks.map((item) => {
          if (item.id === id) {
            item.light = false;
            item.empty = true;
            return item;
          } else {
            return item;
          }
        });
        setBlocks(allBlocks);
        break;
      default:
        break;
    }
  }; 

  const handleChange = (e) => {
    setLength(e.target.value > 0 ? e.target.value : 1)
  };

  return (
    <div className="main">
      <Form 
        length={length}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <BlockCountainer 
        blocks={blocks}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
