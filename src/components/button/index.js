

const Button = ({text}) => {
    return (
        <a class="button" href="https://cab.tmtpartnership.com/login" className={`2xl:px-8 lg:px-8 sm:px-6 px-6 py-2 lg:text-xl text-xs border-greenEnd border-2 rounded-xl max-w-fit max-h-fit  hover:bg-greenEnd transition-all`}>{text}</a>
    )
}

export default Button