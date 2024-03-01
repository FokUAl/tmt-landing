import ScreenWidth from '../../functions/screenWidth'
import logo from '../../static/images/logo.webp'
import Button from '../button'

const Nav = () => {
    return (
        <nav className="w-full mt-4 fixed font-inter z-50">
            <ul className="grid lg:mx-16 md:mx-8 sm:mx-4 mx-4 lg:grid-cols-3 md:grid-cols-1/2/1 sm:grid-cols-nav-sm grid-cols-nav-sm lg:p-5 md:p-3 p-2 rounded-xl bg-grey">
                <li className='flex flex-col justify-center'>
                    <img src={logo} alt="logo" className="lg:w-16 lg:ml-4 w-14 ml-2 align-middle" />
                </li>
                {ScreenWidth() <= 640 && <li><div className="h-full w-[2px] bg-gradient-to-t  from-greenStart to-greenEnd"></div></li>}
                <li className="flex lg:flex-row md:flex-row md:gap-8 flex-col justify-center lg:gap-12">
                    <a className="flex flex-col justify-center lg:text-base md:text-sm text-xs" href="">О нас</a>
                    <a className="flex flex-col justify-center lg:text-base md:text-sm text-xs" href="">Почему мы?</a>
                    <a className="flex flex-col justify-center lg:text-base md:text-sm text-xs" href="">Нам доверяют</a>
                </li>
                <li className="flex lg:flex-row lg:justify-end md:flex-row md:justify-end flex-col justify-center">
                    <Button text="Присоединиться" />
                </li>
            </ul>
        </nav>
    )
}

export default Nav