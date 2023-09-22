/* eslint-disable react/prop-types */


const ReusableFrom = ({handleSubmit,formTitle, submitBtnText = 'Submit' , children}) => {
  const handleLocalSubmit = e => {
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    handleSubmit(data);
  }
    return (
        <div>
       {children}
              <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <br />
                <input type="email" name="email" />
                <br />
                <br />
                <input type="password" name="password" />
                <br />
               <input className="btn" type="submit" value={submitBtnText}/>
            </form>
        </div>
    );
};

export default ReusableFrom;