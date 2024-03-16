import WantToCook from '../WantToCook/WantToCook'
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking'
import {useState} from "react"


function Sidebar({ wantCook, setWantCook }) {
    const [cooking, setCooking] = useState([]);

    const handlePreparing = (cook) => {
        const cookAfterCooking = wantCook.filter(c => c.recipe_id !== cook.recipe_id);
        const cookingAfterWantCook = wantCook.filter(c => c.recipe_id === cook.recipe_id);
        setWantCook(cookAfterCooking);
        setCooking(prevCooking => [...prevCooking, ...cookingAfterWantCook]);
        console.log(cooking.length);
    }

    return (
        <div className='md:col-span-2 border-2 rounded-xl py-5 px-2'>
            <WantToCook wantCook={wantCook} handlePreparing={handlePreparing} setWantCook={setWantCook}/>
            <div className="divider"></div>
            <CurrentlyCooking cooking={cooking}/>
        </div>
    )
}

export default Sidebar;
