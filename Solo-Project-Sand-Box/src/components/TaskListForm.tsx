import { useState } from "react";
import { Button } from "@chakra-ui/react";

function Form(props) {
  const [name, setName] = useState('');

  // NOTE: As written, this function has a bug: it doesn't prevent the user
  // from submitting an empty form. This is left as an exercise for developers
  // working through MDN's React tutorial.
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          The First 5 tasks are Required
        </label>
        However, you can add tasks Below
        
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <Button type="submit" justifyContent="center" className="btn btn__primary btn__lg">
        Add
      </Button>
{/*}      <button type="submit" className="btn btn__primary btn__lg">
        Add
  </button> */}
    </form>
  );
}

export default Form;