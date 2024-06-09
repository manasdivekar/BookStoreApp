import React from "react";

const BooksSection = ({ data }) => {
  // console.log(data);
  //   // Ensure data is an array
  //   const books = Array.isArray(data) ? data : [];

  return (
    <div className="d-flex justify-content-around align-items-center text-white flex-wrap p-4 bg-dark">
      {data &&
        data.map((item, index) => (
          <div
            className="card "
            style={{ margin: "5px", width: "220px", height: "360px" }}
          >
            <div>
              <img
                style={{
                  width: "220px",
                  height: "190px",
                  border: "2px solid black",
                  borderRadius:"20px"
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
              {" "}
              Price : Rs{item.price}/-
            </p>
            <div
              className="d-flex justify-content-around align-items-center  "
              style={{ width: "100%", flexDirection: "row" }}
            >
              <button
                className="btn btn-success "
                style={{ width: "40%", padding: "4px" }}
              >
                UPDATE
              </button>
              <button
                className="btn btn-danger "
                style={{ width: "40%", padding: "4px" }}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;

// {data &&
//     data.map((item, index) => {

//         <div className="text-white">{item.title}</div>

//     })}
