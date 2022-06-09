const express = require('express');
const PORT = process.env.PORT || 3003;
const app = express();

const soccerRoute = require('./routes/soccer');

app.use("/soccer", soccerRoute);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
