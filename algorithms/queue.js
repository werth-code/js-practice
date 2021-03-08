class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// Queue's are FIFO Data Structures

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    // show us the first node in queue
    peek() {
        if(!this.first) return null
        else return this.first
    }

    // add on to the end of the queue
    enQueue(data) {
        const node = new Node(data)
        if(!this.first) {
            this.first = node
            this.last = node
        }
        else {
            this.last.next = node
            this.last = node
        }
        this.length++
        return node 
    }

    // remove the first item from the queue
    deQueue() {

        if(this.first === null) return null

        const trackingNode = this.first

        if(this.first === this.last) {
            this.first = null
            this.last = null
        }
        else this.first = this.first.next
        
        this.length--
        return trackingNode
        
    }
}

const queue = new Queue()
queue.enQueue('first')
queue.enQueue('second')
queue.enQueue('third')

queue.deQueue()
queue.deQueue()
queue.deQueue()

console.log(queue)