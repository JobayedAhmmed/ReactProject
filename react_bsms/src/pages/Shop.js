import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [product, setProduct] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const http = "http://localhost:8080/";
  const searchedProduct = product.filter(
    (pr) =>
      pr.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.product_details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(product);

  useEffect(() => {
    allprod();
  }, []);
  const allprod = async () => {
    axios.get("http://localhost/react_bsms/api/allproducts.php").then((res) => {
      setProduct(res.data.datas.pr);
    });
  };

  return (
    <div className="furnitures_section layout_padding ">
      <div className="container">
        <h1 className="our_text">OUR Products</h1>
        <p className="ipsum_text">
          There are many various of items in My Baker Shop{" "}
        </p>
        <div className="furnitures_section2 layout_padding">
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <h2>All Products</h2>

              <label htmlFor="search">Search: </label>
              <input
                id="search"
                type="text"
                name="searchTerm"
                onChange={handleSearch}
              />

              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>details</th>
                    <th>Price</th>
                    <th>image</th>
                  </tr>
                </thead>
                <tbody>
                  {searchedProduct.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.product_name}</td>
                      <td>{item.product_details}</td>
                      <td>{item.product_price}</td>
                      <td>
                        {/* <img src={item.product_image} /> */}
                        <img src={http + item.product_image} width="100px" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
