import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="w-full flex gap-8 my-16">
            <div className="w-1/2 relative">
              <img className='w-5/6 rounded-lg' src={person} alt="" />
              <img className='w-1/2 absolute right-0 bottom-0 rounded-lg border-8 border-white' src={parts} alt="" />
            </div>
            <div className="w-1/2 space-y-5">
                <h3 className='text-[#FF3811] text-xl font-bold'>About Us</h3>
                <h2 className='text-5xl font-bold w-2/3 '>We are qualified & of experience in this field</h2>
                <p className='text-base font-normal text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-base font-normal text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn bg-[#FF3811] text-white border-none mr-3">Get More Info</button>
            </div>
        </div>
    );
};

export default About;