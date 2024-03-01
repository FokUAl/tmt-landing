

const Button = ({text}) => {
    return (
        <a class="button" href="https://cab.tmtpartnership.com/login" className={`2xl:px-8 lg:px-8 sm:px-6 px-2 py-2 lg:text-xl sm:text-xs text-[0.6rem] border-greenEnd border-2 rounded-xl max-w-fit max-h-fit text-center  hover:bg-greenEnd transition-all`}>{text}</a>
    )
}

export default Button