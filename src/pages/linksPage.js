import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const LinksPage = () => {
    return (
        <section className="flex justify-center min-h-[50vh]" id="trust">
            <div className="flex flex-col justify-center">
                <p className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-greenStart to-greenEnd">Если у вас<br />остались вопросы</p>
                <p className="mt-8 text-center">Мы всегда рады ответить на них!<br />Свяжитесь с нами удобным<br/>для вас способом:</p>
                <div className="flex justify-center mt-4">
                    <a className="bg-greenStart text-black rounded-full p-2 mr-4 cursor-pointer hover:bg-greenEnd transition-all" href="mailto:support@tmtpartnership.com" target="_blank">
                        <IoIosMail size={30} />
                    </a>
                    <a className="bg-greenStart text-black rounded-full p-2 mr-4 cursor-pointer hover:bg-greenEnd transition-all" href="https://www.instagram.com/tmt.partners" target="_blank">
                        <FaInstagram size={30} />
                    </a>
                    <a className="bg-greenStart text-black rounded-full p-2 cursor-pointer hover:bg-greenEnd transition-all" href="https://www.t.me/tmtpartners" target="_blank">
                        <FaTelegramPlane size={30} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default LinksPage