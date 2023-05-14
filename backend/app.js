import express from 'express';
import helmet from 'helmet';
import xss from 'xss-clean';
import compression from 'compression';
import cors from 'cors';
import expressSession from 'express-session';
import passport from 'passport';
import httpStatus from 'http-status';
import config from './config/config';
import morgan from './config/morgan';
import { jwtStrategy, googleAuthStrategy } from './config/passport';
import routes from './routes/v1';
import { errorConverter, errorHandler } from './middlewares/error';
import ApiError from './utils/ApiError';

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

const sessionConfig = {
  secret: 'session_secret',
  resave: false,
  saveUninitialized: true,
  cookie: {},
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  sessionConfig.cookie.secure = true;
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// use express sessions
app.use(expressSession(sessionConfig));

// gzip compression
app.use(compression());

// enable cors
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

// jwt authentication
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use('jwt', jwtStrategy);
passport.use('google', googleAuthStrategy);

// load all v1 api routes
app.use('/api/v1', routes);
app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to mentors management system app!' });
});

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;
