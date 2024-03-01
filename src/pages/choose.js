import Line from '../components/line';
import Card from '../components/card'
import Button from '../components/button';

const Choose = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="2xl:w-1/3 xl:w-1/3 md:w-1/3 sm:w-1/2 w-3/4 flex flex-col mx-auto">
        <h4 className="2xl:text-6xl xl:text-5xl md:text-4xl sm:text-4xl text-4xl font-bold leading-snug text-center text-transparent bg-clip-text bg-gradient-to-r from-greenStart to-greenEnd">
          Почему стоит
          <br />
          выбрать нас?
        </h4>
        <Line />
      </div>
      <div className="p-16 grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
        <Card title="Честность и прозрачность" text="Мы предоставляем честные условия сотрудничества и полную прозрачность во всех операциях - для нас очень важна лояльная и дружественная атмосфера с нашими партнерами!" />
        <Card title="Инновации и технологии" text="Мы на шаг впереди, всегда следуем за последними трендами в мире арбитража. Современные инструменты помогут вам максимизировать ваш доход вместе с нами!" />
        <Card title="Опыт и Репутация" text="Мы - команда профессионалов, имеющая опыт в IGaming индустрии, с помощью которого мы поможем вам достигнуть высоких результатов!" />
      </div>
      <div className="mx-auto">
        <Button text="Присоединиться" />
      </div>
    </section>
  );
};

export default Choose;
