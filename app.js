// import
const { posts } = require("./db");
const postsRouter = require("./routers/posts");
const express = require("express");
const handlerError = require("./middleware/hendolerror");
const errorFound = require("./middleware/errorfound");
// install express e port
const app = express();
const port = 3000;
const url = `http://localhost:${port}`;

// middleware
app.use(express.static("public"));
app.use(express.json());

// accesso all routers
app.use(postsRouter);

// middleware per errore
app.use(handlerError);
app.use(errorFound);

// ascolto
app.listen(port, () => {
  console.log(`server in ascolto su ${url}`);
});
