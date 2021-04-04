/**
 *
 * Least Recently Used(LRU) Cache implementation rules
 * Time complexity
 * 1. Insertion of a new element: O(1)
 * 2. Retrieval of an element: O(1)
 * 3. Removing an element: O(1)
 *
 * Rules
 * 1. Retrieve/get the item will make it the most recently used item
 * 2. Insert a new element at the head of Doubly Linked List
 * 3. If the cache limit is exceed while inserting, remove the last element in the Doubly Linked List
 * 4. Store the key and value in an object
 *
 * Data Structure
 * 1. Doubly Linked List: Remove the element in O(1)
 * 2. Map: Access the element in O(1)
 *
 * Reference
 * - [LRU Cache Explanation](https://www.youtube.com/watch?v=DhMPK7BN_lQ&ab_channel=ProgressiveCoder)
 * */
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.maxSize = 4;
        this.cache = {};
    }

    put(key, value) {
        let newNode;

        // if the key is not present in cache
        if (this.cache[key] === undefined) newNode = new Node(key, value);

        // if list is empty
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            this.cache[key] = newNode;
            return this;
        }

        if (this.size === this.maxSize) {
            // remove from cache
            delete this.cache[this.tail.key];

            // set a new tail
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
        }

        // add an item to the head, cause it's the least used element
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.size++;

        // add to cache
        this.cache[key] = newNode;
        return this;
    }

    get(key) {
        if (!this.cache[key]) {
            return undefined;
        }

        let foundNode = this.cache[key];

        if (foundNode === this.head) return foundNode;

        let previous = foundNode.prev;
        let next = foundNode.next;

        // remove element
        if (foundNode === this.tail) {
            previous.next = null;
            this.tail = previous;
        } else {
            previous.next = next;
            next.prev = previous;
        }
        // set it to least element
        this.head.prev = foundNode;
        foundNode.next = this.head;

        foundNode.prev = null;
        this.head = foundNode;

        return foundNode;
    }
}
