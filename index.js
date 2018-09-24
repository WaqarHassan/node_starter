const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();
  
  authRoutes(app); // require('./routes/authRoutes')(app);

//Dynamic Port 	binding
const PORT = process.env.PORT || 5000

app.listen(PORT);