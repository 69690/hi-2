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
// let x : Course;

function App() {

  // const {products} = {data};

  //Cart State Variable
  const [cartItems, setCartItems] = useState([]);
  //add to cart function
  // const onAdd = (course: any) => {
  //   const exist = cartItems.find((x) => x.id === course.id);
  //   if (exist) {
  //     console.log("ALREADY IN KART");
  //   } else {
  //     setCartItems([...cartItems, {...course, qty: 1}]);
  //   }
  // }

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
            {/* <Basket onAdd={onAdd} cartItems={cartItems}></Basket> */}
            <Basket cartItems={cartItems}></Basket>
        </div>
    </div>
  );
}


//getting course details
function getDetails(element: any) {   //Get course details
  let course: Course = {
    id: element.id,
    title: element.title,
    author: element.author,
    price: element.price,
    disc: element.disc,
  };
  return (  //returning course card element
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
