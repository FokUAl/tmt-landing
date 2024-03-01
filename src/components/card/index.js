const Card = ({ title, text }) => {
  return (
    <div className="border-greenEnd rounded-2xl border-[1px] py-8 px-4">
      <h5 className="xl:text-2xl 2xl:text-2xl md:text-xl sm:text-l text-l font-bold text-center w-1/2 h-1/3 mx-auto mb-8 text-transparent bg-clip-text bg-gradient-to-r from-greenStart to-greenEnd">{title}</h5>
      <p className="text-text-grey text-center">{text}</p>
    </div>
  );
};

export default Card;
