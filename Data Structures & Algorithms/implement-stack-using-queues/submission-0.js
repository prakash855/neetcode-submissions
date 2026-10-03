class MyStack {
    constructor() {
        this.q = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        let n = this.q.length-1
        for(let i=0; i<n; i++){
            this.q.push(this.q.shift())
        }
        return this.q.shift()
    }

    /**
     * @return {number}
     */
    top() {
        let n = this.q.length-1
        for(let i=0; i<n; i++){
            this.q.push(this.q.shift())
        }
        let front = this.q[0]
        this.q.push(this.q.shift())
        return front
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
