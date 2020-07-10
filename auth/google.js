var GoogleStrategy = require('passport-google-oauth20').Strategy;
var passport = require('passport');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_LOGIN_CALLBACK_URL
  },
  ((accessToken, refreshToken, profile, done) => {
  	const data = profile._json;
  	console.log(data);

  	User.foc({
  		'googleId': data.id
  	}, {
  		name: data.givenName,
  		surname: data.familyName,
  		profilePhotoUrl: data.picture.url,
  	}, (err,user) => {
  		return done(err.user);
  	});

  }
)));

module.exports = passport;