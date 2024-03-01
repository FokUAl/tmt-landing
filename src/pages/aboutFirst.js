import objectFirst from '../static/images/object-start.webp'
import objectFirstSm from '../static/images/object-start-sm.webp'
import Line from '../components/line'
import Button from '../components/button'

const AboutFirst = () => {

    return (
        <header className="pt-32">
            <div className="grid lg:grid-cols-2 md:grid-cols-3/1 sm:grid-cols-3/1 grid-cols-3/1">
                <div className="w-5/6 flex flex-col justify-center lg:mx-16 md:mx-8 sm:mx-4 mx-4 lg:pr-24">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-greenStart to-greenEnd lg:text-7xl sm:text-xl text-3xl lg:mb-8 mb-2 font-bold">Профит<br/>без границ!</h1>
                    <p className="text-primary lg:text-2xl text-sm mb-6">TMT Partners - платформа арбитражных возможностей, где профессионализм, опыт и инновации встречаются для максимизации вашей прибыли. Вместе мы формируем профитное будущее!</p>
                    <div className="lg:mb-8 mb-4">
                        <Line />
                    </div>
                    <Button text="Присоединиться" />
                </div>
                <div className="lg:mr-16 ">
                    <picture>
                        <source media="(max-width: 900px)" srcSet={objectFirstSm} className="float-right" alt="object-first" />
                        <img src={objectFirst} className="float-right" alt="object-first" />
                    </picture>
                </div>
            </div>
        </header>
    )
}

export default AboutFirst