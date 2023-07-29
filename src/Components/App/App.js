import { useState } from 'react';
import "./App.css";
import BlockCountainer from '../BlockConatiner/BlockCountainer';
import Form from '../Form/Form';
import { data } from '../../Constants/Data';
import { regularize } from '../../utils/utils';


const App = () => {
  const [idCounter, setIdCounter] = useState(1);
  const [length, setLength] = useState(1);
  const [blocks, setBlocks] = useState(data);

  return (
    <div className="main">
      <Form 
        length={length}
        setLength={setLength}
        idCounter={idCounter}
        setIdCounter={setIdCounter}
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <BlockCountainer 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <button onClick={() => regularize(blocks, setBlocks)}>Упорядочить</button>
    </div>
  );
}

export default App;
