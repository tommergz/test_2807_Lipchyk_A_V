import { handleClick } from "../../utils/utils";
import "./BlockCountainer.css";

const BlockCountainer = ({blocks, setBlocks}) => {
  return (
    <div className="block-container">
      {
        blocks.map(({id, empty, light}, index) => {
          return <div 
            key={+Date.now().toString() + index}
            id={id} 
            className="block" 
            style={{ backgroundColor: empty ? "white" : light ? "green" : "rgb(68, 68, 68)"}}
            onClick={(e) => handleClick(e, blocks, setBlocks)}
          >
            {empty ? 'X' : id}
          </div>
        })
      }
    </div>
  );
}

export default BlockCountainer;
