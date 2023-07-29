import { styled } from "styled-components";
import { handleClick } from "../../utils/utils";

const Container = styled.div`
  width: 310px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 20px 0 20px;
  cursor: pointer;
`

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: white;
  border: 1px solid black;
  margin: 2px;
`

const BlockCountainer = ({blocks, setBlocks}) => {
  return (
    <Container>
      {
        blocks.map(({id, empty, light}, index) => {
          return <Block 
            key={+Date.now().toString() + index}
            id={id}
            style={{ backgroundColor: empty ? "white" : light ? "green" : "rgb(68, 68, 68)"}}
            onClick={(e) => handleClick(e, blocks, setBlocks)}
          >
            {empty ? 'X' : id}
          </Block>
        })
      }
    </Container>
  );
}

export default BlockCountainer;
