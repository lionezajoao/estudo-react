const db = require('./dbConn')

class Clients {
    name;
    regs;

    async signUp(name, regs) {
        const client = new Clients();
        client.name = name;
        client.regs = regs;
        console.log(client)
        const conn = db.connect(); 
        await db.insert('clients', client)
    }
}

module.exports = new Clients();