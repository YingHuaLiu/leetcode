let user = {
    name: 'zdm'
}
let userProxy = new Proxy(user, {
    get(target, prop) {
        return target[prop];
    }
})

console.log(userProxy.name)