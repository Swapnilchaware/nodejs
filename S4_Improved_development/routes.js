

const requestHandler = (req,res) => {

    const html = `
    <html>
        <body>
            <h1>Hiii Welcome to node js!</h1>
            <form action="/send" method="POST">
                <input type="text" name="name">
                <br>
                <button type="submit">send</button>
            </form>
        </body>
    </html>
`;
  
    if (req.url === '/') {
        res.write(html);
        return res.end();
    } else if (req.url === '/send') {

        const body = [];

        req.on('data',(chunk)=> {
            console.log(chunk);
            body.push(chunk)
          
        })

        let parsedBody = ''

        req.on('end', () => {parsedBody = Buffer.concat(body).toString();

        const value = parsedBody.split('=')[1];

        console.log('value is',value);  
            
        })


        console.log(req)
        res.statusCode = 302;
        res.setHeader('Location','/');          
        return res.end();
    }
}

module.exports = requestHandler;