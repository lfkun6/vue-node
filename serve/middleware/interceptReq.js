//const { apiWhiteList } = require('../utils/variable.json');
// 白名单免登陆
// "apiWhiteList": [ "/home", "/api/user/logIn" ,"/api-docs"]
const { verifyToken } = require('./auth');
 
module.exports = (req, res, next) => {
  // 请求拦截是否登陆认证
  const authToken = req.headers['authorization'];
  /* if (!apiWhiteList.some(keyword => req.path.includes(keyword))) {
    if (!authToken) {
      return res.status(401).sendResponse({
        code: '401',
        data: '未登陆',
        message: '未登陆用户'
      });
    } else {
      if (verifyToken(authToken)) {
        next();
      } else {
        return res.status(401).sendResponse({
          code: '401',
          data: '未登陆',
          message: 'token校验失败，请重新登录'
        });
      }
    }
  } else {
    next();
  } */
  if (verifyToken(authToken)) {
    next();
  } else if(req.path==='/login' || req.path==='/register'){
    console.log(req.path);
    next();
  } else {
    return res.status(401).sendResponse({
      code: '401',
      data: '未登陆',
      message: 'token校验失败,请重新登录'
    });
  }
};