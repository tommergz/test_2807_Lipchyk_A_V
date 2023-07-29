import "./BlockCountainer.css";

const BlockCountainer = ({blocks, handleClick, handleDelete}) => {
  return (
    <div className="block-container">
      {
        blocks.map(({id, empty, light}, index) => {
          return <div 
            key={+Date.now().toString() + index}
            id={id} 
            className="block" 
            style={{ backgroundColor: empty ? "white" : light ? "green" : "black"}}
            onClick={handleClick}
          >
            {empty ? '' : id}
          </div>
        })
      }
    </div>
  );
}

export default BlockCountainer;
