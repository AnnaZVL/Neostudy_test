import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function HeaderMain({cartCount}) {   
    return (
        <header className="header ">          
            <div className="container header__container">
                <Link className='header__logo logo' to='/'>QPICK</Link>
                <div className="header__actions">
                    <a className='header__link' href="#">
                        <img className='header__icon' src="/icons/favorites.svg" alt="Иконка избранного" />  
                        <span className='header__count'>0</span>
                    </a>
                    <Link className='header__link' to='/cart'>
                        <img className='header__icon' src="/icons/cart.svg" alt="Иконка корзины" />    
                        <span className='header__count'>{ cartCount }</span>                
                    </Link>
                </div>                
            </div>            
        </header>
    )
}

HeaderMain.propTypes = {
  cartCount: PropTypes.number.isRequired
};

export default HeaderMain