import { app } from "./app";
let router = app();
// Server Listen Along with Database 
// connection(in case of data persistence)

const PORT = 3030;

router.listen(PORT, () =>{
console.log("listening on port" + PORT)
})
