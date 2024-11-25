import SectionHeader from "../../../components/Shared/SectionHeader/SectionHeader";

import teamMember1 from '../../../assets/images/team/1.jpg'
import teamMember2 from '../../../assets/images/team/2.jpg'
import teamMember3 from '../../../assets/images/team/3.jpg'


const Teams = () => {
  return (
    <div>
      <SectionHeader
        subTitle="Team"
        title="Meet Out Team"
        description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* team member 1 */}
        <div className="card bg-base-100 w-full shadow-xl p-5 border">
          <img className="h-52 rounded-lg" src={teamMember1} alt="Shoes" />

          <div>
            <h2 className="text-xl text-center font-bold mt-3">Car Engine Plug</h2>
            <h3 className="text-base text-center font-medium ">Engine Expert</h3>
            <div className="flex justify-between items-center">
               <p>facebook</p>
               <p>twitter</p>
               <p>Linkdin</p>
               <p>Instragram</p>
            </div>
          </div>
        </div>

         {/* team member 2 */}
        <div className="card bg-base-100 w-full shadow-xl p-5 border">
          <img className="h-52 rounded-lg" src={teamMember2} alt="Shoes" />

          <div>
          <h2 className="text-xl text-center font-bold mt-3">Car Engine Plug</h2>
            <h3 className="text-base text-center font-medium ">Engine Expert</h3>
            <div className="flex justify-between items-center">
               <p>facebook</p>
               <p>twitter</p>
               <p>Linkdin</p>
               <p>Instragram</p>
            </div>
          </div>
        </div>
          
        {/* team member 3 */}
        <div className="card bg-base-100 w-full shadow-xl p-5 border">
          <img className="h-52 rounded-lg" src={teamMember3} alt="Shoes" />

          <div>
          <h2 className="text-xl text-center font-bold mt-3">Car Engine Plug</h2>
            <h3 className="text-base text-center font-medium ">Engine Expert</h3>
            <div className="flex justify-between items-center">
               <p>facebook</p>
               <p>twitter</p>
               <p>Linkdin</p>
               <p>Instragram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
