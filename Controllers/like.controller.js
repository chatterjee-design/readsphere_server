import Like from "../Models/like.schema.js";

const addTofavourites = async (req, res, next) => {
    try {
      const { bookId } = req.body;
      const userId = req.user.id;
  
      // Validate input
      if (!bookId) {
        return next(new AppError("Every fields are required", 400));
      }
  
      // Check if the book exists
      const book = await Library.findById(bookId);
      if (!book) {
        return next(new AppError("Book not found", 404));
      }
  
      let likes = await Like.findOne({ userId });
      if (!likes) {
        cart = await Cart.create({ userId, items: [] });
      }
  
      const existingItemIndex = likes.items.findIndex((item) =>
        item.bookId.equals(book._id)
      );
      if (existingItemIndex === -1) {
        likes.items.push({ bookId, quantity });
      }
  
      // Fetch the updated book details to include in the response
      // const updatedBook = await Library.findById(bookId);
  
      await likes.save();
  
      res.status(200).json({
        success: true,
        message: "Book added to cart successfully",
        data: { likes},
      });
    } catch (error) {
      return next(new AppError("Internal Server Error", 500));
    }
  };

  export {addTofavourites};