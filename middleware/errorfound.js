const errorFound = (req, res, next) => {
  res.status(404);
  res.json({
    error: "not found",
    message: "post non trovato",
  });
};

module.exports = errorFound;
