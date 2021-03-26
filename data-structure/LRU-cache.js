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
 * 1. Doubly Linked List
 * 2. Map
 *
 * Reference
 * - [LRU Cache Explanation](https://www.youtube.com/watch?v=DhMPK7BN_lQ&ab_channel=ProgressiveCoder)
 * */
class LRUCache {}
