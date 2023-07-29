import { handleSubmit } from "../../utils/utils";
import "./Form.css";

const Form = ({
  length,
  setLength,
  idCounter,
  setIdCounter,
  blocks, 
  setBlocks
}) => {
  
  const handleChange = (e) => {
    setLength(e.target.value > 0 ? e.target.value : 1)
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, length, idCounter, setIdCounter, blocks, setBlocks)}>
      <label>
        Длина блока:
        <input
          className="form-input" 
          type="number" 
          value={length} 
          onChange={handleChange} 
        />
      </label>
      <input type="submit" value="Сохранить" />
    </form>
  );
}

export default Form;
