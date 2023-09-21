import { useEffect, useRef } from "react";


const RafForm = () => {
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const emailRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    useEffect(() => {
nameRef.current.focus();
    },[]);
    return (
        <div>
             <form onSubmit={handleSubmit}>
        <input ref={nameRef}  type="text" name="name" />
        <br />
        <br />
        <input ref={emailRef} defaultValue={''}  type="email" name="email" id="" />
        <br />
        <br />
        <input ref={passwordRef} type="password" name="password" required />
        <br />
        <input type="Submit" value="Submit" />
      </form>
 
        </div>
    );
};

export default RafForm;