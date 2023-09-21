import useInputState from "../../hook/uselnputState";

const CoustomHookForm = () => {
    const [name, handleNameChange] = useInputState('Rojoni')
  const handleSubmit = (e) => {
    console.log('handleSubmit', name);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} type="text" name="name" />
        <br />
        <br />
        <input type="email" name="email" />
        <br />
        <br />
        <input type="password" name="password" />
        <br />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default CoustomHookForm;
