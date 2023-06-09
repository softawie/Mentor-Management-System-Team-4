import jwt from 'jsonwebtoken';
import config from '../config/config';

const verifyToken = async (req, res, next) => {
  const auth = req.headers.authorization || req.headers['x-access-token'];

  const token = auth && auth.startsWith('Bearer') ? auth.split(' ').pop() : auth;

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'you have to be signed in to continue',
    });
  }

  try {
    const decodedToken = await jwt.verify(token, config.jwt.secret);
    req.user = decodedToken;
  } catch (error) {
    const message = error.name === 'TokenExpiredError' ? 'token expired' : 'invalid token';
    return res.status(401).json({
      success: false,
      code: 'INVALID_SESSION',
      error: message,
    });
  }
  return next();
};

export default verifyToken;
