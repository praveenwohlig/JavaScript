function User(name, tech) {
    this.name = name,
        this.tech = tech
}

let user1 = User('Navin,', 'JS')
let user2 = User('Pradeep', 'Python')

user2.tech = 'ADK'

console.log(user2);
