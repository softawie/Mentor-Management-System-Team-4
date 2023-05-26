import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import config from './config';
import tokenTypes from './tokens';
import models from '../database/models';

const { User } = models;

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const googleAuthOptions = {
  clientID: config.googleAuth.clientId,
  clientSecret: config.googleAuth.clientSecret,
  callbackURL: '/api/v1/auth/google/callback',
  scope: ['profile', 'email'],
  passReqToCallback: true,
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const googleAuthVerify = (req, accessToken, refreshToken, profile, done) => {
  if (profile.email) {
    // only user with an Andela email can sign in with google auth
    const email = profile.email.split('@')[1].includes('gmail');

    if (email) {
      return done(null, profile);
    }
    return done(null, 'not allowed');
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
const googleAuthStrategy = new GoogleStrategy(googleAuthOptions, googleAuthVerify);

export { jwtStrategy, googleAuthStrategy };
