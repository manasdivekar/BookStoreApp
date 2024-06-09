const router = require("express").Router();

const bookModel = require("../models/BookModel");

//-----------------------POST Request---------------------
//route for adding book into database is localhost:5000/api/book/add
router.post("/add", async (req, res) => {
  try {
    // Capture data from request body
    const data = req.body;
    // Creating a new book and saving the book data
    const newBook = new bookModel(data);
    // Now saving the new data in database
    await newBook.save();
    res.status(200).json({ message: "Added a Book Successfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Failed to add the book" });
  }
});

//--------------------------GET REQUEST----------------------------------------------------
// route for fetching a book is localhost:5000/api/book/getBook

router.get("/getBook", async (req, res) => {
  let getBook;

  try {
    getBook = await bookModel.find();

    res.status(200).json({ getBook });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Failed to add the book" });
  }
});

//-----------------------------GET REQUEST BY ID------------------------------------------
// route for fetching a book by its id is  localhost:5000/api/book/getBook/:id

router.get("/getBook/:id", async (req, res) => {
  let getBook;
  const id = req.params.id;

  try {
    getBook = await bookModel.findById(id);

    res.status(200).json({ getBook });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Failed to add the book" });
  }
});

//-----------------------------UPDATE BOOK BY ID------------------------------------------
// route for updating a book by its id is  localhost:5000/api/book/updateBook/:id

router.put("/updateBook/:id", async (req, res) => {
  const id = req.params.id;
  const { title, author, description, image, pages, price } = req.body;
  let updateBook;
  try {
    updateBook = await bookModel.findByIdAndUpdate(id, {
      title,
      author,
      description,
      image,
      pages,
      price,
    });
    await updateBook.save().then(() => res.status(200).json({ updateBook }));
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Failed to add the book" });
  }
});

//-----------------------------DELETE BY ID------------------------------------------
// route for fetching a book by its id is  localhost:5000/api/book/deleteBook/:id

router.delete("/deleteBook/:id", async (req, res) => {
    let deleteBook;
    const id = req.params.id;
  
    try {
      deleteBook = await bookModel.findByIdAndDelete(id);
  
      res.status(201).json({ message:"Book Deleted Successfully" });
    } catch (error) {
      console.log("error", error);
      
    }
  });



module.exports = router;
