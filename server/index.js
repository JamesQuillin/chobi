const app = require('./app.js');

const port = process.env.PORT || 8080;

module.exports = app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
