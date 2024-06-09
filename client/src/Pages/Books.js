import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Url";
import BooksSection from "../components/BooksSection";

const Books = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`${BASE_URL}/api/book/getBook`)
        .then((res) => setData(res.data.getBook));
    };
    fetch();
  }, []);

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-4">
        <h4 className="text-white">Book Section</h4>
      </div>
      {Data ? (
        <BooksSection data={Data} />
      ) : (
        <div className="text-white">Loading......</div>
      )}
    </div>
  );
};

export default Books;
