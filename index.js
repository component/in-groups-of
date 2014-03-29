
function inGroupsOf(arr, n){
  var ret = [];
  var group = [];
  var len = arr.length;
  var per = len * (n / len);

  for (var i = 0; i < len; ++i) {
    group.push(arr[i]);
    if ((i + 1) % n == 0) {
      ret.push(group);
      group = [];
    }
  }

  if (group.length) ret.push(group);

  return ret;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = inGroupsOf;
  else
    window.inGroupsOf = inGroupsOf;