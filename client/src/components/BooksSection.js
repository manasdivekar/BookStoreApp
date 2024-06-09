import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Url";
const BooksSection = ({ data }) => {
  const [books, setBooks] = useState(data);
  const [editBook, setEditBook] = useState(null);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/book/deleteBook/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Failed to delete the book", error);
    }
  };

  const handleUpdate = async (id) => {
    const updatedBook = { ...editBook };
    try {
      const response = await axios.put(
        `${BASE_URL}/api/book/updateBook/${id}`,
        updatedBook
      );
      setBooks(
        books.map((book) => (book._id === id ? response.data.updateBook : book))
      );
      setEditBook(null); // Reset edit state
    } catch (error) {
      console.error("Failed to update the book", error);
    }
  };

  return (
    <div className="d-flex justify-content-around align-items-center text-white flex-wrap p-4 bg-dark">
      {books &&
        books.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{ margin: "5px", width: "220px", height: "360px" }}
          >
            <div>
              <img
                style={{
                  width: "220px",
                  height: "190px",
                  border: "2px solid black",
                  borderRadius: "20px",
                }}
                className="img-fluid"
                src={item.image}
                alt="/"
              />
            </div>
            <h6
              className=""
              style={{
                paddingTop: "2px",
                color: "rgb(96, 4, 133)",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              {item.title.slice(0, 25)}
            </h6>
            <h6
              className=""
              style={{
                color: "rgb(0,113,133)",
                fontSize: "15px",
                textAlign: "end",
                paddingRight: "8px",
              }}
            >
              by {item.author}
            </h6>
            <p
              style={{
                color: "rgb(15,17,17)",
                fontSize: "18px",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              Price : Rs{item.price}/-
            </p>
            <div
              className="d-flex justify-content-around align-items-center"
              style={{ width: "100%", flexDirection: "row" }}
            >
              <button
                className="btn btn-success"
                style={{ width: "40%", padding: "4px" }}
                onClick={() => setEditBook(item)}
              >
                UPDATE
              </button>
              <button
                className="btn btn-danger"
                style={{ width: "40%", padding: "4px" }}
                onClick={() => handleDelete(item._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      {editBook && (
        <div className="edit-form">
          <h3>Edit Book</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editBook._id);
            }}
          >
            <input
              type="text"
              placeholder="Title"
              value={editBook.title}
              onChange={(e) =>
                setEditBook({ ...editBook, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Author"
              value={editBook.author}
              onChange={(e) =>
                setEditBook({ ...editBook, author: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              value={editBook.description}
              onChange={(e) =>
                setEditBook({ ...editBook, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              value={editBook.image}
              onChange={(e) =>
                setEditBook({ ...editBook, image: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Pages"
              value={editBook.pages}
              onChange={(e) =>
                setEditBook({ ...editBook, pages: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              value={editBook.price}
              onChange={(e) =>
                setEditBook({ ...editBook, price: e.target.value })
              }
            />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BooksSection;

// import React from "react";

// const BooksSection = ({ data }) => {
//   // console.log(data);
//   //   // Ensure data is an array
//   //   const books = Array.isArray(data) ? data : [];

//   return (
//     <div className="d-flex justify-content-around align-items-center text-white flex-wrap p-4 bg-dark">
//       {data &&
//         data.map((item, index) => (
//           <div
//             className="card "
//             style={{ margin: "5px", width: "220px", height: "360px" }}
//           >
//             <div>
//               <img
//                 style={{
//                   width: "220px",
//                   height: "190px",
//                   border: "2px solid black",
//                   borderRadius:"20px"
//                 }}
//                 className="img-fluid"
//                 src={item.image}
//                 alt="/"
//               />
//             </div>
//             <h6
//               className=""
//               style={{
//                 paddingTop: "2px",
//                 color: "rgb(96, 4, 133)",
//                 fontSize: "20px",
//                 textAlign: "center",
//               }}
//             >
//               {item.title.slice(0, 25)}
//             </h6>
//             <h6
//               className=""
//               style={{
//                 color: "rgb(0,113,133)",
//                 fontSize: "15px",
//                 textAlign: "end",
//                 paddingRight: "8px",
//               }}
//             >
//               by {item.author}
//             </h6>
//             <p
//               style={{
//                 color: "rgb(15,17,17)",
//                 fontSize: "18px",
//                 textAlign: "center",

//                 fontWeight: "500",
//               }}
//             >
//               {" "}
//               Price : Rs{item.price}/-
//             </p>
//             <div
//               className="d-flex justify-content-around align-items-center  "
//               style={{ width: "100%", flexDirection: "row" }}
//             >
//               <button
//                 className="btn btn-success "
//                 style={{ width: "40%", padding: "4px" }}
//               >
//                 UPDATE
//               </button>
//               <button
//                 className="btn btn-danger "
//                 style={{ width: "40%", padding: "4px" }}
//               >
//                 DELETE
//               </button>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default BooksSection;

// // {data &&
// //     data.map((item, index) => {

// //         <div className="text-white">{item.title}</div>

// //     })}
