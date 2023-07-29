export const handleSubmit = (e, length, idCounter, setIdCounter, blocks, setBlocks) => {
  e.preventDefault();
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

export const handleClick = (e, blocks, setBlocks) => {
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

export const regularize = (blocks, setBlocks) => {
  let allBlocks = [...blocks].sort((a, b) => a.empty - b.empty);;
  setBlocks(allBlocks);
};
