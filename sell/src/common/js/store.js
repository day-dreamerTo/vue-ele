/**
 * Created by admin on 17/4/26.
 */
export function saveToLocal(id, key, value) {
  let seller = window.localStorage.__seller__; // 用私有的 __seller__ 来保存 node没有localStorage
  if (!seller) {
    seller = {};
    seller[id] = {};
  } else {
    seller = JSON.parse(seller);
    //
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  window.localStorage.__seller__ = JSON.stringify(seller); // localStorage存的是字符串
}
export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let ret = seller[key];
  return ret || def;
}
