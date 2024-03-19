import { Link } from 'react-router-dom';

function FooterMain() {
    return (
        <footer className="footer">
            <div className="container">
            <div className="footer__container">

            <Link className='footer__logo logo' to='/'>QPICK</Link>
            <div className="footer__body">
                <nav className='footer__nav'>
                    <ul className="footer__menu menu">
                        <li className="menu__item">
                            <Link className='menu__link footer__link' to="/">Избранное</Link>
                        </li>
                        <li className="menu__item">
                            <Link className='menu__link footer__link' to="/cart">Корзина</Link>
                        </li>
                        <li className="menu__item">
                            <Link className='menu__link footer__link' to="/">Контакты</Link>
                        </li>
                    </ul>
                </nav>
                <div className="footer__content">
                    <a href="" className="footer__link">Условия сервиса</a>
                    <div className="footer__language language">
                        <img className='language__img' src="/icons/language.svg" alt="" />
                        <button className='language__btn language__btn--active' >Рус</button>
                        <button className='language__btn'>Eng</button>
                    </div>
                </div>
                </div>
                <ul className="footer__social social">
                    <li className="social__item">
                        <a href="https://vk.com" className="social__link" target='_blanck' aria-label="Перейти на Вконтакте">
                            <img className='social__icon' src="/icons/VK.svg" alt="Иконка В контате" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://t.me" className="social__link" target='_blanck' aria-label="Перейти в Телеграм">
                            <img className='social__icon' src="/icons/Telegram.svg" alt="Иконка Телеграм" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://wa" className="social__link" target='_blanck' aria-label="Перейти в Ватсап">
                            <img className='social__icon' src="/icons/Whatsapp.svg" alt="Иконка Ватсап" />
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterMain