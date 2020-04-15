const formatTime = (date, pattern) => {
  let value = date;
  let fmt = pattern;
  if (!value) {
    return '';
  }
  if (!value.getMonth) {
    value = new Date(value);
  }
  const o = {
    'M+': value.getMonth() + 1, // 月份
    'd+': value.getDate(), // 日
    'h+': value.getHours(), // 小时
    'm+': value.getMinutes(), // 分
    's+': value.getSeconds(), // 秒
    'q+': Math.floor((value.getMonth() + 3) / 3), 
    S: value.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (`${value.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  Object.keys(o).forEach((k) => {
    if (new RegExp(`(${k})`).test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length))); }
  });
  return fmt;
}

module.exports = {
  formatTime: formatTime
}
