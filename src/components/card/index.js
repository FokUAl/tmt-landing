const Card = ({ title, text }) => {
  return (
    <div className="border-greenEnd rounded-2xl border-[1px] py-8 px-4">
      <h5 className="2xl:text-2xl xl:text-xl md:text-base sm:text-base text-sm font-bold text-center w-1/2 h-fit mx-auto md:mb-4 sm:mb-2 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-greenStart to-greenEnd">{title}</h5>
      <p className="text-text-grey text-center">{text}</p>
    </div>
  );
};

export default Card;
