import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must be at least 6 characters");
    } else {
      setError("");
      console.log(email, password, name);
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlepasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          name="name"
        />
        <br />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" id="" />
        <br />
        <br />
        <input
          onChange={handlepasswordChange}
          type="password"
          name="password"
          required
        />
        <br />
        <input type="Submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefulForm;
