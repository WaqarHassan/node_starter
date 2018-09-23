const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

//client id = 298169812039-if5a3bpleebgm3k9pu32ovg2drpsoam7.apps.googleusercontent.com
//client secret = EsfvVsnVBvsMT9sypQuJrIBI
passport.user(new GoogleStrategy( ));
//Dynamic Port 	binding
const PORT = process.env.PORT || 5000

app.listen(PORT);