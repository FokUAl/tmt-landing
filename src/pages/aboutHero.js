import ScreenWidth from '../functions/screenWidth';
import Line from '../components/line';
import ObjectCenterSm from '../static/images/object-center-sm.webp';

const AboutHero = () => {
  return (
    <section className="h-[75vh] flex flex-col justify-center">
      {ScreenWidth() <= 640 ? (
        <div className="grid grid-cols-1/3">
          <img src={ObjectCenterSm} />
          <div className="mr-2">
            <h2 className="sm:text-4xl text-3xl font-bold leading-snug text-end text-transparent bg-clip-text bg-gradient-to-r from-greenStart to-greenEnd">
              Получай
              <br />
              Отливай
              <br />
              Зарабатывай
            </h2>
            <p className="text-base text-end">
              Помимо оферов ты получишь актуальные подходы, рабочие связки,
              креативы и шаблоны!
            </p>
            <div className="w-3/4 float-right mt-2">
              <Line />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:mx-16 md:mx-8 mx-8 gap-12">
          <div>
            <h2 className="lg:text-6xl text-4xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-greenStart to-greenEnd">
              Получай
              <br />
              Отливай
              <br />
              Зарабатывай
            </h2>
            <div className="2xl:w-2/4 w-3/4 mt-4">
              <Line />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-3xl text-center text-text-grey">
              Помимо оферов ты<br />получишь актуальные<br />подходы, рабочие связки,<br />креативы и шаблоны!
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutHero;
