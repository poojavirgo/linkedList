// Findle middle element in linked list
// Time Complexity: O(n), where n = number of nodes on the linked list
// Space Complexity: O(1)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    appendNode(data) {
        let node = new Node(data);
        if (this.size === 0) {
            this.head = node;
            this.tail = node
        } else {
            const temp = this.tail;
            this.tail = node;
            temp.next = this.tail;

        }
        this.size++;

    }

    printLinkedList() {
        let data = '';
        let current = this.head;

        while (current != null) {
            data = data + current.data + ' ';
            current = current.next;
        }
        return data;
    }

    middleNode() {
        let current = this.head;
        let counter = 0;
        while (current) { //n
            counter++;
            current = current.next;
        }
        let c = 1;
        let midnode = Math.ceil(counter / 2)
        if (counter % 2 === 0) {
            while (c < midnode + 1) {
                c++;
                this.head = this.head.next;
            }
        } else {
            while (c < midnode) {
                c++;
                this.head = this.head.next;
            }

        }
        return this.head.data;

    }


}

let linkedlist = new LinkedList();
linkedlist.appendNode(1);
linkedlist.appendNode(2);
linkedlist.appendNode(3);

linkedlist.printLinkedList();
linkedlist.middleNode();


