import headphonesData from "../data/data_product"
import ProductItem from "../assets/components/Products/ProductItem.jsx"
import PropTypes from 'prop-types';

function Home ({updateCount}) {
   const headphonesList = []
   const headphonesWirelessList = []
   headphonesData.map(product => {
    !product.wireless ? headphonesList.push(product) : headphonesWirelessList.push(product)
   })          

    const headphones = headphonesList.map(product => (
        <ProductItem 
            key={product.id}
            product={product}
            updateCount={updateCount}
            >                
        </ProductItem>
    ))
    
    const wirelessHeadphonesList = headphonesWirelessList.map(product => (        
        <ProductItem 
            key={product.id}
            product={product}
            updateCount={updateCount}
            >            
        </ProductItem>
    ))
    
    return (
        <div className="container products__container">   
        <section className="section product__section">   
            <h2 className="section__title" >Наушники</h2>            
            <div className="products__list">{headphones} </div>
        </section>  
        <section className="section product__section">   
            <h2 className="section__title" >Беспроводные наушники</h2>            
            <div className="products__list">{wirelessHeadphonesList}</div>
        </section>     
        </div>
    )
}

Home.propTypes = {
    updateCount: PropTypes.func.isRequired
};

export default Home