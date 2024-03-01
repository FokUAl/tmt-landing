import ScreenWidth from '../../functions/screenWidth'
import logo from '../../static/images/logo.webp'
import Button from '../button'

const Nav = () => {
    return (
        <nav className="w-full mt-4 fixed font-inter z-50">
            <ul className="grid lg:mx-16 md:mx-8 sm:mx-4 mx-4 lg:grid-cols-3 md:grid-cols-1/2/1 sm:grid-cols-nav-sm grid-cols-nav-sm lg:p-5 md:p-3 p-2 rounded-xl bg-grey">
                <li className='flex flex-col justify-center'>
                    <img src={logo} alt="logo" className="lg:w-16 sm:w-14 min-[320px]:w-12 min-[0px]:w-10 lg:ml-4 sm:ml-2 ml-1 align-middle" />
                </li>
                {ScreenWidth() <= 640 && <li><div className="h-full w-[2px] bg-gradient-to-t  from-greenStart to-greenEnd"></div></li>}
                <li className="flex lg:flex-row md:flex-row md:gap-8 flex-col justify-center lg:gap-12">
                    <a className="flex flex-col justify-center 2xl:text-base lg:text-xs md:text-xs sm:text-xs min-[0px]:text-[0.6rem] text-xs hover:text-link-hover transition-all" href="#about_us">О нас</a>
                    <a className="flex flex-col justify-center 2xl:text-base lg:text-xs md:text-xs sm:text-xs min-[0px]:text-[0.6rem] text-xs hover:text-link-hover transition-all" href="#choose">Почему мы?</a>
                    <a className="flex flex-col justify-center 2xl:text-base lg:text-xs md:text-xs sm:text-xs min-[0px]:text-[0.6rem] text-xs hover:text-link-hover transition-all" href="#trust">Нам доверяют</a>
                </li>
                <li className="flex lg:flex-row lg:justify-end md:flex-row md:justify-end flex-col justify-center">
                    <Button text="Присоединиться" />
                </li>
            </ul>
        </nav>
    )
}

export default Nav