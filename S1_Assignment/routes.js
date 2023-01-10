const templates = require('./templates')

const handleRequest = (req,res) => {

    if (req.url === '/') {
        res.write(templates.greet);
        return res.end();      
    } else if (req.url === '/allUser') {
        res.write(templates.allUsers);
        return res.end(); 
    } else {
        res.write(templates.createUser);
        return res.end(); 
    }


}

module.exports = handleRequest;