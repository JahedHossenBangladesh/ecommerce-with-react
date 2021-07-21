import {React,useState} from 'react';
import Product from '../Product/Product'
import fakeData from '../../fakeData';
const Shop = () => {
    const tenProductData = fakeData.slice(0, 10);
const [product,setProduct] = useState(tenProductData);

    return (
        <main style={{color:'red'}} class = 'cards'>
            <h1>The shop product list</h1>
            
                {product.map(item => ( <Product product={item}> </Product>)) }
          
        </main>
    );
};

export default Shop;