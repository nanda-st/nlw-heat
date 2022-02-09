import { serverHTTP } from "./app";

serverHTTP.listen(4000, () => {
    console.log("Server listening on port 4000 . . .")
});