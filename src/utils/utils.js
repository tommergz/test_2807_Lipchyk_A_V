const checkSpace = (length, blocks) => {
  let count = 0;
  let index = 0;
  let suit = [];
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].empty) {
      count += 1;
      if (count === 1) index = i;
      if (count >= length) {
        suit.push(index);
      } 
    } else {
      if (count === length) {
        suit = [index];
        break;
      } else {
        count = 0;
      }
    }
  };
  return suit.length > 0 ? suit[0] : false;
};


export const handleSubmit = (e, length, idCounter, setIdCounter, blocks, setBlocks) => {
  e.preventDefault();
  let submittedLength = +length;
  let suited = false;
  const suitIndex = checkSpace(submittedLength, blocks);
  const allBlocks = [...blocks].map((item, index) => {
    if (item.empty && submittedLength > 0) {
      if (suitIndex) {
        if (suitIndex === index) suited = true;
        if (suited) {
          item.id = idCounter;
          item.empty = false;
          submittedLength -= 1;
          return item;
        } else {
          return item;
        }
      } else {
        item.id = idCounter;
        item.empty = false;
        submittedLength -= 1;
        return item;
      }
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
