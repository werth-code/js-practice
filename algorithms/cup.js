class Cup {
    constructor(size) {
        this.size = size
        this.fillLevel = 0
    }

    fill(amount) {
        if(amount + this.fillLevel > this.size) throw new Error("This Amount Would Over-Fill Cup.")
        else this.fillLevel += amount
        return this.fillLevel
    }

    empty(amount) {
        if(amount - this.fillLevel >= this.fillLevel) this.fillLevel = 0;
        else this.fillLevel = this.fillLevel - amount
        return this.fillLevel
    }
}

const cup = new Cup(20)
cup.fill(10)
cup.empty(10)

console.log(cup)