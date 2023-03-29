// 实现eventBus
class eventBus {
    constructor() {
        this.listeners = {}
    }

    sub(eventName, fn) {
        if (this.listeners[eventName]) {
            this.listeners[eventName] = []
        }
        this.listeners[eventName].push(fn)
    }
    off(eventName, fn) {
        if (this.listeners[eventName]) {
            const index = this.listeners[eventName].indexOf(fn)
            if (index > 0) {
                this.listeners[eventName].splice(index, 1)
            }
        }
    }
    pub(eventName, arg) {
        if (this.listeners[eventName]) {
            this.listeners[eventName].forEeach(item => {
                try {
                    item(arg)
                } catch (error) {
                    console.log(error)
                }
            })
        }
    }
}
