
class Stack {
    // values;
    // totalElements;
    
    constructor() {
        this.elements = []
        this.totalElements = 0
    }

    push(value) {
        this.elements.push(value)
        console.log(`| added ${value} to the stack |`)
        this.totalElements++
    }

    pop() {
        let value = this.elements.pop()
        console.log(`| removed ${value} from the stack |`)
        this.totalElements--
        return value
    }

    peek() {
        return this.elements[this.totalElements-1]
    }

    isEmpty() {
        return this.totalElements === 0 ? true : false
    }

    printStack() {
    
    }
    
}

let myStack = new Stack() 

console.log(`empty? ${myStack.isEmpty()}`)

myStack.push(1)

let poppedVal = myStack.pop()
console.log(poppedVal)

myStack.push(6)
myStack.push(2)
myStack.push(22)
myStack.push(1)

console.log("peeking top value: " + myStack.peek())

console.log(`empty? ${myStack.isEmpty()}`)
