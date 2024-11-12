import { Router } from "express";
import { isLoggedIn } from "../Middlewares/auth.middleware.js";
import { addTofavourites } from "../Controllers/like.controller.js";


const likeRoute = Router();

likeRoute
  .route("/")
  .post(isLoggedIn, addTofavourites)


export default likeRoute;
