// Single linked list implementation 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    printList(){
        let currentNode = this.head;
        let result = "Linked List: ";
        do{
            result += currentNode.value + "-->"
            currentNode = currentNode.next;
        }while(currentNode != null);
        result += "NULL";
        console.log(result);
    }

    append(value){
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    prepend(value){
        let node = new Node(value);
        let currentNode = this.head;
        node.next = currentNode;
        this.head = node;
        this.length++;
    }

    insert(index,value){
        let node = new Node(value);
        if(index >= this.length)
            this.append(value);
        else if(index == 0)
            this.prepend(value)
        else{
            let currentNode = this.head;
            let counter = 0;
            while(counter != index-1){
                currentNode = currentNode.next;
                counter++;
            }

            node.next = currentNode.next;
            currentNode.next = node
            //this.head = currentNode
            this.length++;
        }
    }

    remove(index){
        let currentNode = this.head;

        if(index == 0){
            let value = this.head.value;
            this.head = currentNode.next;
            this.length--;
            return value;
        }
        else if(index > this.length-1)
            throw new Error("Index out of range");
        else{
            let counter = 0;
            while(counter != index-1){
                currentNode = currentNode.next;
                counter++;
            }
            let value = currentNode.next.value;
            currentNode.next = currentNode.next.next;
            this.length--;
            return value
        }
    }
}

let list = new LinkedList(10);

// Append
list.append(1);
list.append(57);
list.append(16);
list.append(71);
list.append(14);
list.append(3);

// Prepend
list.prepend(15)
list.prepend(23)
list.prepend(74)
list.prepend(64)
list.prepend(52)
list.prepend(344)

list.append(6);
list.prepend(34)
list.append(7);
list.prepend(44)

// Insert
list.insert(2,40);
list.insert(16,555);

list.printList();
console.log(list.length);

// Remove
console.log("Removed at 0: " + list.remove(0));

list.insert(4,333);

// Print
list.printList();
console.log(list.length);
//console.log(list);

console.log("Removed at 14: " + list.remove(14));

list.printList();
console.log(list.length);

console.log("Removed at 17: " + list.remove(17));

list.printList();
console.log(list.length);

console.log("Removed at 13: " + list.remove(13));

list.printList();
console.log(list.length);