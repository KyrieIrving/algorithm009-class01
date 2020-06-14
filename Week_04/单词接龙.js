/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * 解法: BFC广度优先遍历
 */

let ladderLength = function (beginWord, endWord, wordList) {
    if (!endWord || wordList.indexOf(endWord) == -1) {
        return 0;
    }
    let len = wordList.length;
    let size = beginWord.length;
    let comboDicts = {}
    for(let i =0;i<len;i++) {
        for(let j = 0;j<size;j++) {
            let d = wordList[i].substring(0, j) + '*' + wordList[i].substring(j+1, size)
            // (!comboDicts[d]) && (comboDicts[d] = [])
            if (!comboDicts[d]) {
                comboDicts[d] = []
            }
            comboDicts[d].push(wordList[i])
        }
    }
    // console.log(comboDicts)
    let visited = { beginWord: true};
    let queue = [ [beginWord, 1]];
    while (queue.length > 0) {
        let [node, currLevel] = queue.shift();
        for (let i = 0; i < size;i++) {
            var newWord = node.substring(0, i) + '*' + node.substring(i+ 1, size);
            if (newWord in comboDicts) {
                let tmpWords = comboDicts[newWord];
                for (let z = 0; z < tmpWords.length;z++) {
                    if (tmpWords[z] === endWord) {
                        return currLevel + 1;
                    }
                    if (!visited[tmpWords[z]]) {
                        visited[tmpWords] = true;
                        queue.push([tmpWords[z], currLevel + 1])
                    }
                }
            }
        }
    }
    return 0;
}
console.log(ladderLength("hit","cog", ["hot", "dot", "dog", "lot", "log", "cog"]))