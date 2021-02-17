import React from 'react';
import Header from './components/Header';
import Header2 from './components/Header2';
import Main from './components/Main';
import Basket from './components/Basket';

// import { ProductCard, Product } from "./Cards";
// import * as data from './mock.json';


//y
import { useState } from 'react';
import { useQuery } from 'react-query';

//Styles
// import { Wrapper } from './App.styles';

//Types
// export type CartItemType = {
//   id: number;
//   title: string;
//   author: string;
//   price: number;
//   disc: number;
// };

//e-y


// import data from './data';
import { Course, CourseCard } from './ShowCard';
import * as d from './mock.json';

function App() {

  // const {products} = {data};

  const [cartItems, setCartItems] = useState([]);

  return (
    
    <div className="App">

        <Header></Header>
        
        <div>
          <Header2></Header2>
        </div>


        <div className="row">
          {/* <Main> */}
            {/* <Main products={products}> */}
              {/* <h4> {data.products.map((element, index) => {
                  return getDetails(element);
                })} 
              </h4> */}
            {/* </Main> */}
            <main className="col-2">
              <table> 
                <tr>
                  <td>
                    <h3 className="left">All Courses</h3>
                  </td>
                  <td className="algnright">
                  <select className="right" id="sortBy">
                    <option value="price">Price</option>
                  </select>
                  </td>
                </tr>
              </table>
              {/* <h3 className="left">All Courses</h3> */}
              {/* <select className="right" id="sortBy">
                <option value="price">Price</option>
              </select> */}
                {d.course.map((element, index) => {
                  // return <div key={element.id}>{element.title}</div>;
                  return getDetails(element);
                })}
            </main>
            <Basket cartItems={cartItems}></Basket>
        </div>
    </div>
  );
}

function getDetails(element: any) {
  let course: Course = {
    id: element.id,
    title: element.title,
    author: element.author,
    price: element.price,
    disc: element.disc,
  };
  return (
    <CourseCard 
      id = {element.id}
      title = {element.title}
      author = {element.author}
      price = {element.price}
      disc = {element.disc}
    />
  );
}
// function getDetails(element: any) {
//   let product: Product = {
//     id: element.id,
//     title: element.title,
//     author: element.author,
//     price: element.price,
//     disc: element.disc
//   };
//   return (
//     <ProductCard
//       id={element.id}
//       title={element.title}
//       author={element.author}
//       price={element.price}
//       disc={element.disc}
//     />
//   );
// }


export default App;
