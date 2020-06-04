/**
 * @param {string}
 * @param {string}
 * @return {boolean}
 * 哈希表解法：1：创建一个hashMap, 遍历第一个元素，将其值最为key, 出现的次数作为Val, 添加到hashMap中
 *2:遍历第二个元素，查看其值在不在hashMap 中， 如果val ===1,存在，在hashMap 中删掉这表数据， 如果val >1(出现重复数据), 将hashMap中Val-1;
若果小于1， 在hashMap 中添加这条数据，值为1， 最后判断hashMap.size < 0是其有效的字母异味词，反之不是。
 */

let isAnagram = function (s, t) {
    let hash = new Map();
    for(let i =0; i<s.length; i++) {
        if (hash.has(s[i])) {
            hash.set(s[i], hash.get(s[i]));
        } else {
            hash.set(s[i], 1);
        }
    }
    for (let j = 0;j<t.length;j++) {
        let temp = t[j],
        hashVal = hash.get(temp);
        if (hashVal ===1) {
            hash.delete(temp);
        } else if (hashVal > 1) {
            hash.set(temp, hashVal-1);
        } else {
            hash.set(temp, 1)
        }
    }
    if (hash.size) {
        return false;
    } else {
        return true;
    }
};
console.log(isAnagram("anagram", "nagaram"));
