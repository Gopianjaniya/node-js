
// get all
const getAll = (req, res) => {
  res.status(200).json({ success: true, message: "Success for all books" });
};

//get single
const getSingleBook = (req,res)=>{
    const {id} = req.params;
    res.status(200).json({ success: true, message: "Success for single books",bookId:id});

}
//new book create
const newBook =(req,res)=>{
    const {title,auther} = req.body;
      res
        .status(200)
        .json({
          success: true,
          message: "create a new books successfully",
          title,auther
        });

}

// update book
const updateBook =(req,res)=>{
    const {id}  = req.params;
    res.status(200).json({success:true ,message:"Upadate book",bookId:id,title,auther})

}
// delete book
const deleteBook = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ success: true, message: "Delete book", bookId: id });
};

module.exports = {getAll,getSingleBook,newBook,updateBook,deleteBook}