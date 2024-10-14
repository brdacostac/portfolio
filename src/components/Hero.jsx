import { styles } from "../styles";
import Avatar from "/avatar/avatarPNG.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[450px] mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="xs:flex-row flex-col flex gap-10">
          <div className="relative">
            <div className="bg-white rounded-full w-44 h-44">
              <img className="w-44 h-44 rounded-full" src={Avatar} alt="ProfilePic" />
            </div>
          </div>          
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Bruno <span className="text-[#915EFF]">Cunha</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Développeur Full Stack
            </p>
            <StyledButton />
          </div>
        </div>
      </div>
    </section>
  )
}

const StyledButton = () => (
  <button className='green-pink-gradient p-[1px] rounded-[20px] shadow-card mt-10'>
    <div className='bg-tertiary rounded-[20px] py-2 px-12 min-h-[50px] flex justify-evenly items-center flex-col'>
          <a href={import.meta.env.BASE_URL+"CV_Bruno.pdf"} target="_blank" download={"CV_Bruno.pdf"} >   
            <h3 className='text-white text-[15px] font-bold text-center'>
                Télécharger CV
            </h3>
          </a>
      </div>
  </button>
);

export default Hero;
