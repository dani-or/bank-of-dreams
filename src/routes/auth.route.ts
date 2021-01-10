import { Router } from "express";
//import { createUserController } from "./useCases/CreateUser";

const AuthRouter = Router();


AuthRouter.post("/login", (request, response) => {
  //return createUserController.handle(request, response);
  let body = request.body;
  response.json({hola:"hola TypeScript"});
});

export { AuthRouter };