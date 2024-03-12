import ScreenWidth from '../functions/screenWidth';
import ObjectBottom from '../static/images/object-bottom.webp';
import Line from '../static/images/line.svg';
import LineS from '../static/images/lineS.svg';

const AboutEnd = () => {
  return (
    <section id="trust" className="2xl:h-[200vh] xl:h-[200vh] md:h-[200vh] sm:h-[150vh] h-[150vh] relative lg:mt-48">
      <div
        className="relative h-[1103px] bg-no-repeat bg-center 2xl:bg-cover xl:bg-cover md:bg-cover sm:bg-cover bg-cover"
        style={{
          backgroundImage: `url(${ScreenWidth() <= 650 ? LineS : Line})`,
        }}
        role="img"
        aria-label="dotted line"
      >
        <div className="absolute 2xl:top-0 xl:top-0 md:top-[10%] sm:top-[15%] top-[15%] left-[5%] bg-grey bg-opacity-70 p-4 border-greenEnd border-[1px] rounded-xl 2xl:w-1/4 xl:w-1/4 md:w-1/4 sm:w-1/3 w-1/3 h-fit z-10">
          <p className="xl:text-3xl 2xl:text-3xl md:text-l sm:text-base text-xs text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-greenEnd to-greenStart">
            Прямые
            <br />
            рекламодатели
          </p>
        </div>
        <div className="absolute 2xl:top-[30%] xl:top-[35%] md:top-[35%] sm:top-[35%] top-[35%] left-[27%] bg-grey bg-opacity-70 p-4 border-greenEnd border-[1px] rounded-xl 2xl:w-1/4 xl:w-1/4 md:w-1/4 sm:w-1/3 w-1/3 h-fit z-10">
          <p className="xl:text-3xl 2xl:text-3xl md:text-l sm:text-base text-xs  text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-greenEnd to-greenStart">
            Огромный
            <br />
            пласт опыта
          </p>
        </div>
        <div className="absolute 2xl:top-[65%] xl:top-[60%] md:top-[60%] sm:top-[60%] top-[60%] left-[50%] bg-grey bg-opacity-70 p-4 border-greenEnd border-[1px] rounded-xl 2xl:w-1/4 xl:w-1/4 md:w-1/4 sm:w-1/3 w-1/3 h-fit z-10">
          <p className="xl:text-3xl 2xl:text-3xl md:text-l sm:text-base text-xs  text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-greenEnd to-greenStart">
            Высокие
            <br />
            выплаты
          </p>
        </div>
        <div className="absolute 2xl:top-[90%] xl:top-[90%] md:top-[80%] sm:top-[80%] top-[80%] 2xl:left-[70%] xl:left-[70%] md:left-[70%] left-[65%] bg-grey bg-opacity-70 p-4 border-greenEnd border-[1px] rounded-xl 2xl:w-1/4 xl:w-1/4 md:w-1/4 sm:w-1/3 w-1/3 h-fit z-10">
          <p className="xl:text-3xl 2xl:text-3xl md:text-l sm:text-base text-xs  text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-greenEnd to-greenStart">
            Передовой
            <br />
            сервис
          </p>
        </div>
      </div>
      <img
        src={ObjectBottom}
        className="absolute 2xl:w-1/3 xl:w-2/5 md:w-1/2 sm:w-1/2 w-1/2 2xl:top-1/3 xl:top-1/3 l:top-1/3 md:top-1/3 sm:top-1/4 min-[750px]:top-2/4 top-[60%] z-0"
        alt="Object"
      />
    </section>
  );
};

export default AboutEnd;
