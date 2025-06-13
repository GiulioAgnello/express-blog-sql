// import
const connection = require(`../db`);

// controller delle routers
const index = (req, res) => {
  // query per la chiamata
  const sql = `SELECT * FROM blog_db.posts`;

  // esecuzione della query
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: `database query failed` });
    res.json(results);
  });
};
const show = (req, res) => {
  // query per la chiamata
  const { id } = req.params;
  const showSql = `SELECT * FROM blog_db.posts WHERE id = ?`;
  // con join
  const tagSql = `SELECT * FROM blog_db.tags JOIN post_tag ON tags.id = post_id WHERE id = ?`;

  // esecuzione della query
  connection.query(showSql, [id], (err, postResults) => {
    if (err) return res.status(500).json({ error: `database query failed` });
    if (postResults.length === 0)
      return res.status(404).json({ error: `post not found` });

    const post = postResults[0];

    connection.query(tagSql, [id], (err, tagsResults) => {
      if (err) return res.status(500).json({ error: "Database query failed" });

      // add tag to post
      post.tags = tagsResults;
      res.jeson(post);
    });
  });
};
const store = (req, res) => {
  //   // recuperiamo info dal body
  //   const { title, content, image, tags } = req.body;
  //   // controllo dati dal body
  //   let isRequestMalformed = false;
  //   const malformedElement = [];
  //   if (!title || typeof title !== "string") {
  //     console.log("title is malformed");
  //     malformedElement.push(title);
  //     isRequestMalformed = true;
  //   }
  //   if (!content || typeof content !== "string") {
  //     console.log("content is malformed");
  //     malformedElement.push(content);
  //     isRequestMalformed = true;
  //   }
  //   if (!image || typeof image !== "string") {
  //     console.log("image is malformed");
  //     malformedElement.push(image);
  //     isRequestMalformed = true;
  //   }
  //   if (!Array.isArray(tags)) {
  //     console.log("tags is malformed");
  //     malformedElement.push(tags);
  //     isRequestMalformed = true;
  //   }
  //   if (isRequestMalformed) {
  //     res.status(400);
  //     res.json({
  //       error: "400 bad request",
  //       message: "request is malformed",
  //     });
  //     return;
  //   }
  //   // nuovo id
  //   const newId = posts[posts.length - 1].id + 1;
  //   const newPost = {
  //     id: newId,
  //     title: title,
  //     content: content,
  //     image: image,
  //     tags: tags,
  //   };
  //   // pusho il nuovo post nell'array
  //   posts.push(newPost);
  //   // restituisco le informazioni aggionrate
  //   res.status(201);
  //   res.json(newPost);
};
const update = (req, res) => {
  // // recupero il post da modificare
  // const id = parseInt(req.params.id);
  // const post = posts.find((currentPost) => currentPost.id === id);
  // if (!post) {
  //   res.status(404);
  //   return res.json({
  //     error: "not found",
  //     message: "post not found",
  //   });
  // }
  // // creiamo il nuovo post
  // const { title, content, image, tags } = req.body;
  // // controllo dati dal body
  // let isRequestMalformed = false;
  // const malformedElement = [];
  // if (!title || typeof title !== "string") {
  //   console.log("title is malformed");
  //   malformedElement.push("title");
  //   isRequestMalformed = true;
  // }
  // if (!content || typeof content !== "string") {
  //   console.log("content is malformed");
  //   malformedElement.push("content");
  //   isRequestMalformed = true;
  // }
  // if (!image || typeof image !== "string") {
  //   console.log("image is malformed");
  //   malformedElement.push("image");
  //   isRequestMalformed = true;
  // }
  // if (!Array.isArray("tags")) {
  //   console.log("tags is malformed");
  //   malformedElement.push(tags);
  //   isRequestMalformed = true;
  // }
  // if (isRequestMalformed) {
  //   res.status(400);
  //   res.json({
  //     error: "400 bad request",
  //     message: "request is malformed",
  //   });
  //   return;
  // }
  // const newPost = {
  //   id: post.id,
  //   title: title,
  //   content: content,
  //   image: image,
  //   tags: tags,
  // };
  // // sostituisco con lo splice il post con id d'interesse
  // posts.splice(posts.indexOf(post), 1, newPost);
  // res.json({
  //   description: `lista dei post`,
  //   data: posts,
  // });
};
const modify = (req, res) => {
  // recupero post dove applicare la patch
  //   const id = parseInt(req.params.id);
  //   const post = posts.find((currentPost) => currentPost.id === id);
  //   if (!post) {
  //     res.status(404);
  //     return res.json({
  //       error: "not found",
  //       message: "post not found",
  //     });
  //   }
  //   // creiamo il nuovo post
  //   const title = req.body.title !== undefined ? req.body.title : post.title;
  //   const content =
  //     req.body.content !== undefined ? req.body.content : post.content;
  //   const image = req.body.image !== undefined ? req.body.image : post.image;
  //   const tags = req.body.tags !== undefined ? req.body.tags : post.tags;
  //   // controllo dati dal body
  //   let isRequestMalformed = false;
  //   const malformedElement = [];
  //   if (!title || typeof title !== "string") {
  //     console.log("title is malformed");
  //     malformedElement.push("title");
  //     isRequestMalformed = true;
  //   }
  //   if (!content || typeof content !== "string") {
  //     console.log("content is malformed");
  //     malformedElement.push("content");
  //     isRequestMalformed = true;
  //   }
  //   if (!image || typeof image !== "string") {
  //     console.log("image is malformed");
  //     malformedElement.push("image");
  //     isRequestMalformed = true;
  //   }
  //   if (!Array.isArray(tags)) {
  //     console.log("tags is malformed");
  //     malformedElement.push("tags");
  //     isRequestMalformed = true;
  //   }
  //   if (isRequestMalformed) {
  //     res.status(400);
  //     res.json({
  //       error: "400 bad request",
  //       message: "request is malformed",
  //       malformedElement,
  //     });
  //     return;
  //   }
  //   // if (title) {
  //   //   post.title = title;
  //   // }
  //   // if (content) {
  //   //   post.content = content;
  //   // }
  //   // if (image) {
  //   //   post.image = image;
  //   // }
  //   // if (tags) {
  //   //   post.tags = tags;
  //   // }
  //   post.title = title;
  //   post.content = content;
  //   post.image = image;
  //   post.tags = tags;
  //   res.json(post);
  // };
  // const destroy = (req, res) => {
  //   const id = parseInt(req.params.id);
  //   const post = posts.find((post) => post.id === id);
  //   if (!post) {
  //     res.status(404);
  //     return res.json({
  //       error: "not found",
  //       message: "post not found",
  //     });
  //   }
  //   posts.splice(posts.indexOf(post), 1);
  //   res.json({
  //     description: `lista dei post`,
  //     data: posts,
  //   });
};
const destroy = (req, res) => {
  // recupero id
  const { id } = req.params;
  const destroySql = `DELETE FROM blog_db.posts WHERE id = ?`;
  // eliminiamo il post identicato con id
  connection.query(destroySql, [id], (err) => {
    if (err)
      return res.status(500).json({ error: `Failed to delet Post ${[id]}` });
    res.sendStatus(204);
  });
};

// ;

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
