const greeting = ` <h1> Welcome to Node js Course! </h1> `;
const allUsers = `


            <html>
                <body>
                    <ul>
                        <li>Swapnil Chaware</li>
                        <li>Suhas Chaware</li>
                        <li>Pooja Chaware</li>
                    </ul>
                </body>
            </html>
`;

const createUser = `
       

            <html>
            <body>
            <form action="/create">
            <input 
                type="text"
                name="username"
            />

            <button type="submit">Submit</button>
        </form>
            </body>
        </html>
`;


module.exports = {
    greet : greeting,
    allUsers : allUsers,
    createUser : createUser
};