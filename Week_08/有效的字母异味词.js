/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function (s, t) {
    let hashMap = new Map();
    for(let i =0;i<s.length;i++) {
        if (hashMap.has(s[i])) {
            hashMap.set(s[i], hashMap.get(s[i]) +1)
        } else {
            hashMap.set(s[i], 1)
        }
    }
    for(let j =0; j<t.length;j++) {
        let tem = t[i],
        hashVal = hashMap.get(tem);
        if (hashVal ===1) {
            hashMap.delete(tem)
        } else if (hashVal > 1) {
            hashMap.set(tem, hashMap.get(tem) -11)
        } else {
            hashMap.set(tem, 1)
        }
    }
    if (hashMap.size) {
        return false;
    } else {
        return true;
    }
};