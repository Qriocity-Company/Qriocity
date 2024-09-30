
import { FaPython, FaChessQueen, FaCertificate,FaStar } from "react-icons/fa";
import interview from "../../assets/interview.png";
import Linkedin from "../../assets/linkedin.png";
import doc from "../../assets/doc.png";
import discord from "../../assets/discord.png"; 

const BonusesSection = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  

  return (
    <div className="mt-10 bg-[#FEEEE9] h-auto w-full rounded-xl flex flex-col justify-center items-center p-4 mb-10">
            <h1 className="text-4xl font-bold mt-10 lg:text-[50px]">
              Exciting <span className="text-[#F26530]">bonuses</span>
            </h1>
            <div className="mt-10 lg:mt-20 flex flex-wrap justify-center items-center gap-4 lg:gap-5 w-full">
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Python <span>10 hours </span> <span>recorded videos</span>
                  Rs.1499
                </h1>

                <FaPython className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Apptitude <span>2 hours</span> <span>recorded videos</span>
                  Rs.999
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={doc}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  DSA <span>3 hours</span> <span>recorded videos </span>
                  <span>Rs.999</span>
                </h1>
                <FaChessQueen className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14" />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Higher Studies <span>A - Z</span> 1 hour recorded videos{" "}
                  <span>Rs.999</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={interview}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  2 <span>Recorded</span> <span>Mock Interviews </span>
                  <span>Rs.499</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={interview}
                />
              </div>

              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  2 Resume <span>& Cold Email</span> <span>Live Sessions</span>{" "}
                  Rs.999
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={doc}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  2 <span>Linkedin Mastery</span> <span>Live Sessions</span>
                  Rs.1999
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={Linkedin}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Discord <span>Community</span> <span>lifetime </span>
                  <span>Access</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={discord}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Free Career Guidance <span>Session By Founder</span>& CEO of{" "}
                  <span>Qriocity,Kesavan</span>
                </h1>
                <img
                  className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14"
                  src={interview}
                />
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
                <FaStar className="ml-2" size={15} color="#F15A29" />
                <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
                  Course <span>Completion</span>{" "}
                  <span>Linkedin Shareable </span>
                  <span> Certificate</span>
                </h1>
                <FaCertificate className="place-self-end mt-5 h-10 w-10 text-blue-500 lg:h-14 lg:w-14" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:mr-10 mt-10 mb-10">
              <button
                className="px-14 py-4 rounded-full font-bold text-white"
                style={{
                  background:
                    "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
                onClick={() => {
                  scrollToTop();
                }}
              >
                UNLOCK THESE BONUSES FOR FREE NOW
              </button>
            </div>
          </div>

  );
};

export default BonusesSection;
