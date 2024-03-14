const app = require('./app');
const port = process.env.PORT || 4001;
const db = require('./db');
db.connectToDB();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

