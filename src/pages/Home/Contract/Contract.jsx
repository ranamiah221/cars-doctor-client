import one from '../../../assets/images/contract/001-timetable.svg'
import two from '../../../assets/images/contract/Group 34.svg'
import three from '../../../assets/images/contract/Group 35.svg'

const Contract = () => {
    return (
        <div className="bg-black rounded-lg px-14 py-20 flex justify-between items-center my-20">
               <div className="text-white flex items-center gap-2">
                   <img src={one} alt="" />
                   <div>
                    <p>We are open monday-friday</p>
                    <h1 className="text-xl font-medium">7:00 am - 9:00 pm</h1>
                   </div>
               </div>

               <div className="text-white flex items-center gap-2">
                   <img src={two} alt="" />
                   <div>
                    <p>Have a question?</p>
                    <h1 className="text-xl font-medium">+2546 251 2658</h1>
                   </div>
               </div>

               <div className="text-white flex items-center gap-2">
                   <img src={three} alt="" />
                   <div>
                    <p>Need a repair? our address</p>
                    <h1 className="text-xl font-medium">Liza Street, New York</h1>
                   </div>
               </div>
        </div>
    );
};

export default Contract;