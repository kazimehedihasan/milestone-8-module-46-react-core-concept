/* eslint-disable react/prop-types */
import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousin name={'tumpa'} asset={asset}></Cousin>
                <Cousin name={'sohana'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;