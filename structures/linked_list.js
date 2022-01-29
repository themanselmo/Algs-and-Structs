
class ListNode {
    
    constructor(value) {
        this.value = value
        this.next = null
    }

}

class LinkedList {

    constructor(head = null) {
        this.head = head
        this.size = 0
    }

    insert(value) {
        console.log(`| inserting node with value: ${value} |`)
        let newNode = new ListNode(value)

        if(this.head == null) {
            this.head = newNode
        }

        else {
            let current = this.head

            while(current.next) {
                current = current.next
            }

            current.next = newNode
        }

        this.size++
    }

    getFirst() {
        console.log(`| returning first node in the list |`)
        return this.head
    }

    getLast() {
        console.log(`| returning last node in the list |`)
        let current = this.head
        
        while(current.next) {
            current = current.next
        }

        return current
    }
}

let n1 = new ListNode("max")
let n2 = new ListNode("rich")
let n3 = new ListNode("pat")
let n4 = new ListNode("andres")
let n5 = new ListNode("nate")

let myList = new LinkedList()
myList.insert("max")
myList.insert("rich")
myList.insert("pat")
myList.insert("andres")
myList.insert("nate")

console.log(myList.getFirst())
console.log(myList.getLast())