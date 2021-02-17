import React from 'react';
// import Product from './Product';

export default function Main(props) {
    const {products} = props;
    return (
        <main className="col-2">
            <h3 className="row col-1 bgtrans">All Courses</h3> 
            {/* <h4>{props.products.id}</h4> */}
            {/* <h2 className="row col-2">Lol</h2> */}
            {/* <div className="row">
                 { products.map((product) => (
                     <Product key={product.id} product={product} ></Product>
                 ) )} */}
            {/* </div> */}
        </main>
    );
}