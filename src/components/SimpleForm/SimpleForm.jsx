

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        // console.log('Submit button clicked');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <br />
                <input type="email" name="email" />
                <br />
                <br />
                <input type="text" name="phone" />
                <br />
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;