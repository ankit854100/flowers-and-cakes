import React from 'react'
import { useSelector } from 'react-redux'

import './productList.css'
import ProductListTable from './ProductListTable';

function ProductList(props) {

   const cakes = useSelector((state) => state.items.cakes);
   const flowers = useSelector((state) => state.items.flowers);

   console.log(cakes);

    return (
        <div className="productList">
            {/* <h2>List of products</h2> */}
            <ProductListTable name="Cakes" items={cakes} setRightContainer={props.setRightContainer}/>
            <ProductListTable name="Flowers" items={flowers} setRightContainer={props.setRightContainer} />
        </div>
    )
}

export default ProductList;
