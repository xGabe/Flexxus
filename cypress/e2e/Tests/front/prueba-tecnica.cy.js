describe('Login', () => {
    before('Estar situado en la url',() => {
        cy.visit("https://helpdesk.flexxus.com.ar/login")
    })
    it("Iniciar sesión",()=>{
        cy.get("#basic_email").type("martin.usuario@flexxus.com.ar")
        cy.get("#basic_password").type("12345678")
        cy.get("[type='submit']").should("contain", "Iniciar Sesión").click()
        cy.url().should("contain", "inicio")
        
    })
})