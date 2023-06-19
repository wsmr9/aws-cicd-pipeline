const express = require("express");

const app = express();

const PORT = process.env.PORT || 3;

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Ok",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
