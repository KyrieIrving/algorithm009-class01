/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */

let robotSim = function (commands, obstacles) {
    let dx = [0,1,0,-1],
    dy = [1,0,-1,0],
    di =0,
    endX = 0,
    endY = 0,
    result = 0,
    hashObstacle = {};
    for (let i = 0; i < obstacles.length;i++) {
        hashObstacle[obstacles[i][0] + '_' + obstacles[i][1]] = true;
    }
    for (let i =0;i<commands.length;i++) {
        if (commands[i] === -2) {
            di = (di+1)%4;
        } else if (commands[i] === -1) {
            di = (di + 3) % 4;
        } else {
            for (let z = 0; z < commands[i];z++) {
                let nextX = endX + dx[di];
                let nextY = endY + dy[di];
                if (hashObstacle[nextX + '' + nextY]) {
                    break;
                }
                endX = nextX;
                endY = nextY;
                result = Math.max(result, endX * endX + endY * endY)
            }
        }
    }
    return result;

};
console.log(robotSim([4, -1, 3],[]));