// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     const products = await axios.get("http://localhost:8080/fronted/products");
//     setProducts(products.data);
//   };
//   const http = "http://localhost:8080/";
//   const deleteProduct = async (id) => {
//     await axios.delete(`http://localhost:8080/fronted/products/${id}`);
//     getProducts();
//   };
//   console.log(products);
//   return (
//     <div>
//       <Link to="/add" className="btn btn-primary">
//         Add New
//       </Link>
//       <table className="table is-striped is-fullwidth">
//         <thead>
//           <tr>
//             <th>SN</th>
//             <th>Product Image</th>
//             <th>Product Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={product.id}>
//               <td>{index + 1}</td>
//               <td>
//                 <img src={http + product.product_image} width="100px" />
//               </td>
//               <td>{product.product_name}</td>
//               <td>{product.product_price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductList;
