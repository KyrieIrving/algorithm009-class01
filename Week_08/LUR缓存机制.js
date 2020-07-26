
// 链表节点

class Node {
    constructor(key, val) {
        this.key  = key;
        this.val = val
    }
}
// 双向链表
class DoubleList {
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.size = 0;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    // 在链表头部添加
    addFirst(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
        this.size++;
    }
    // 删除链表中存在的节点
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }
    // 删除链表最后一个节点， 并返回这个节点
    removeLast() {
        // 链表为空
        if (this.tail.prev === this.head) {
            return null;
        }
        let last = this.tail.prev;
        this.remove(last);
        return last;
    }
}
/**
 * @param {number} capacity
 */

// let LRUCache = function(capacity) {
//     this.capacity = capacity; // 缓存的容积
//     this.map = new Map(); // 初始化哈希表
//     this.cache = new DoubleList(); // 初始化双链表
// }
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; // 缓存的容积
        this.map = new Map(); // 初始化哈希表
        this.cache = new DoubleList(); // 初始化双链表
    }
    get(key) {
        let map = this.map;
        if (!map.has(key)) {
            return -1;
        }
        let val = map.get(key).val;
        // 最近访问的数据前置
        this.put(key, val);
        return val;
    }
    put(key, val) {
        let map = this.map;
        let cache = this.cache;
        let node = new Node(key,val);
        if (map.has(key)) {
            cache.remove(map.get(key));
        } else {
            // 链表容器已经满了，删除最后一个
            if (this.capacity === cache.size) {
                let last = cache.removeLast(node);
                map.delete(last.key);
            }
        }
        cache.addFirst(node);
        // 更新map映射
        map.set(key, node);

    }
}


let cache = new LRUCache(2 /* 缓存容量 */ );
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));