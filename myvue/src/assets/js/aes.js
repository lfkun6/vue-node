import CryptoJS from 'crypto-js'
var key = '0ca03a92751282f6ee05f8e6e42020b5'

export function encrypt(text) {
  var srcs = CryptoJS.enc.Utf8.parse(text);
  return CryptoJS.AES.encrypt(srcs, CryptoJS.enc.Utf8.parse(key), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString()
}

export function decrypt(text) {
  var result = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  return CryptoJS.enc.Utf8.stringify(result).toString();
}
