class Stack {
    constructor() {
        this.items = []
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.isEmpty()) return '栈为空'
        return this.items.pop();
    }
    peak() {
        if (this.isEmpty()) return '栈为空'
        return this.items[this.size() - 1]
    }
    isEmpty() {
        return !this.size()
    }
    clear() {
        this.items = [];
    }
    size() {
        return this.items.length
    }
}

export default new Stack()