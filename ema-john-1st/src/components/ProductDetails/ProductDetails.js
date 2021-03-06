import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { productKey } = useParams()
    console.log(productKey);
    const product = fakeData.find(pd => pd.key === productKey)
    console.log("p", product);
    return (
        <div>
            {/* <h1>{productKey} thi is product details</h1> */}
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;