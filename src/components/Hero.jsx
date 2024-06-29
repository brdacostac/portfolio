import { styles } from "../styles";
import Avatar from "/avatar/avatar.jpg";

const Hero = () => {
  return (
    <section className={`relative w-full h-[550px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] 
           max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className="xs:flex-col flex-row flex">
          <img className="w-44 h-44 rounded-full mt-10"
            src={Avatar} alt="ProfilePic">
          </img>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Bruno</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Software Developer
            </p>
            <StyledButton title='Download CV' onClick={() => console.log("Download")}/>
          </div>
        </div>
      </div>
    </section>
  )
}

const StyledButton = ({ title, onClick }) => (
  <button className=' green-pink-gradient p-[1px] rounded-[20px] shadow-card mt-5'
    onClick={onClick}>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-2 px-12 min-h-[50px] flex justify-evenly items-center flex-col'
      >
        <h3 className='text-white text-[15px] font-bold text-center'>
          {title}
        </h3>
      </div>
  </button>
);

export default Hero;
