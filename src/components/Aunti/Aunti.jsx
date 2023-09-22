import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunti = () => {
    const [money, setMoney]= useContext(MoneyContext);
    return (
        <div>
            <h3>Aunti</h3>
            <section className="flex">
<Cousin name={'mamshad'}></Cousin>
<Cousin name={'Rubaiya'}></Cousin>
            </section>
            <p>money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000</button>
        </div>
    );
};

export default Aunti;