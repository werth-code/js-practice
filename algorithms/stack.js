class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

//Stack is a FILO data structure
class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    pop() {
        if(!this.top) return -1
        if(this.length === 1) {
            let top = this.top
            this.top = null
            this.bottom = null
            this.length = 0
            return top
        }
        else {
            let top = this.top
            this.top = this.top.next
            this.length--
            return top
        }
    }

    push(data) {
        const node = new Node(data)

        if(this.top === null) {
            this.top = node
            this.bottom = node
        }
        else {
            let tempTop = this.top
            this.top = node
            this.top.next = tempTop
        }
        this.length++
    }

    peek() {
        if(this.top) return this.top
        else return null
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()
stack.peek()



console.log(stack.peek())
console.log(stack)