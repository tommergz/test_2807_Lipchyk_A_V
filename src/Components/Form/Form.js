import "./Form.css";

const Form = ({length, handleSubmit, handleChange}) => {
  return (
    <form onSubmit={handleSubmit}>
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
