const products = [];
const path = require('path')
const fs = require('fs');

module.exports = class Product {
    constructor(t) {
        this.item = t;
    }

    save() {
        
        // products.push(this)


        //Storing the location of the file 
        const filePath = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'product.json'
        )

        let products = []


        //Reading the file content
        fs.readFileSync(filePath,(error,fileContent) => {
            
            if (!error) {
                product = JSON.parse(fileContent)
            }

            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err) => {
                console.log(err);
            })

        })

    }

   static fetchAll() {
        // return products;

        //Storing the location of the file 
        const filePath = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'product.json'
    )

        fs.readFile(filePath,(error,fileContent) => {
            if (error) {
                return [];
            }

            return JSON.parse(fileContent)
        })
    }
}