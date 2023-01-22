let token

describe('Prueba tecnica de API', () => {
    
    it('endpoint auth/login', () => {
        
        cy.request({
            method: "POST",
            url: "https://electro.flexxus.com.ar/v2/auth/login",
            headers:{
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                "username": "DEMO",
                "password": "DEMO",
                "deviceinfo": {
                "model": "0",
                    "platform": "0",
                    "uuid": "4953457348957348975",
                    "version": "0",
                    "manufacturer": "0"
                }
            }    
        })
        .then(response => {
            expect(response).to.be.an("object")
            expect(response.status).to.eql(200)
            token = response.body.token            
        })
    });

    it('GET Products', () => {
        cy.request({
            method: "GET",
            url: "https://electro.flexxus.com.ar/v2/products",
            headers: {
                Authorization: "Bearer " + token,
                accept: "application/json"
            }
        }).then(response => {
            expect(response.status).to.eql(200)
            expect(response.body).to.be.an("object")
        })    
    });
});