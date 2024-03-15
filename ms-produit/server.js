const app = require('./app');
const port = process.env.PORT || 4000;
const db = require('./db');
db.connectToDB();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

