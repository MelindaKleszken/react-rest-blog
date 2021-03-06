const {Router} = require('express');
const {getAllUsers, addUser, updateUserById, deleteUser} = require("../controllers/user")
const userRouter = Router();

// userRouter.get("/users", getAllUsers);
// userRouter.post("/users", addUser);
// userRouter.patch("/users/:id/", updateUserById);
// userRouter.delete("/users/:id", deleteUser);

//simpler way
userRouter.route("/users").get(getAllUsers).post(addUser)
userRouter.route("/users/:id").patch(updateUserById).delete(deleteUser)
//userRouter.route("/users/all").get(getAllUserNames)


module.exports = {
    userRouter,
}