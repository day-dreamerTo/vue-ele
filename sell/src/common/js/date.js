/**
 * Created by admin on 17/4/24.
 */
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    // RegExp.$1 匹配到的对象
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}
// 不用再判断str的长度
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
