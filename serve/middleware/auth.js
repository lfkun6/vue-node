const jwt = require('jsonwebtoken');
 
const secretKey = 'woshiaikunmeifannao'
// 生成JWT令牌
const createToken = (payload, options = {}) => {
  const defaultOptions = { expiresIn: '1h' };
  const combinedOptions = Object.assign({}, defaultOptions, options);
  const token = jwt.sign(payload, secretKey, combinedOptions);
  return token;
};
 
// 验证JWT令牌
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch {
    // 令牌无效或已过期
    return null;
  }
};
 
// 解码JWT令牌
const decodeToken = (token) => { return jwt.decode(token); };
// 认证中间件
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send('Unauthorized');
  }
};
// 导出生成和验证 Token 的函数以及认证中间件
module.exports = {
  createToken,
  verifyToken,
  decodeToken,
  authenticate,
};