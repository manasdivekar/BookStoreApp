import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Url";

const AddBooks = () => {
  const [Data, setData] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    pages: "",
    price: "",
  });

  const changeDetail = (e) => {
    //destructuring of data
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const addBookFunction = async (e) => {
    e.preventDefault();
    await axios
      .post(`${BASE_URL}/api/book/add`, Data)
      .then((res) => alert(res.data.message));
    setData({
      title: "",
      author: "",
      description: "",
      image: "",
      pages: "",
      price: "",
    });
  };
  console.log(Data);

  return (
    <div
      className="bg-dark d-flex justify-content-center align-item-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container p-4">
        {/* Book Title */}
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Title"
            name="title"
            value={Data.title}
            onChange={changeDetail}
          />
        </div>

        {/* Author */}
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Author Name"
            name="author"
            value={Data.author}
            onChange={changeDetail}
          />
        </div>

        {/* Description */}
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The Book Description"
            name="description"
            value={Data.description}
            onChange={changeDetail}
          />
        </div>

        {/* Image */}
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Image URL"
            name="image"
            value={Data.image}
            onChange={changeDetail}
          />
        </div>

        {/* Pages */}
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Pages
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Pages"
            name="pages"
            value={Data.pages}
            onChange={changeDetail}
          />
        </div>

        {/* Price */}
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Price"
            name="price"
            value={Data.price}
            onChange={changeDetail}
          />
        </div>

        {/* Button For ADD BOOK  */}
        <button
          className="btn btn-success mt-4 align-items-center "
          style={{ width: "50%", marginLeft: "300px", fontSize: "20px" }}
          onClick={addBookFunction}
        >
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default AddBooks;
