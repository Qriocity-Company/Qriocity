import { FaStar, FaPython, FaChessQueen, FaCertificate } from "react-icons/fa";

const BonusCard = ({ title, description, price, icon }) => {
  return (
    <div className="bg-white p-4 rounded-xl flex flex-col h-auto w-[200px] lg:h-[250px] lg:w-[250px]">
      <FaStar className="ml-2" size={15} color="#F15A29" />
      <h1 className="flex items-start font-bold text-sm lg:text-lg flex-col mt-4 ml-2">
        {title}
        <span>{description}</span>
        <span>{price}</span>
      </h1>
      <div className="place-self-end mt-5 h-10 w-10 lg:h-14 lg:w-14">{icon}</div>
    </div>
  );
};

export default BonusCard;
