class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    pop() {

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

    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack)