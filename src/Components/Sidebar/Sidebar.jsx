import WantToCook from '../WantToCook/WantToCook'
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking'

function Sidebar({wantCook}) {
  return (
    <div className='md:col-span-2 border-2 rounded-xl py-5 px-2'>
        <WantToCook wantCook={wantCook}/>
        <div className="divider"></div>
        <CurrentlyCooking/>
    </div>
  )
}

export default Sidebar