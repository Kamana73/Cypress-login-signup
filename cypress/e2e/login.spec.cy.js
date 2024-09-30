describe("login page",()=>{


    beforeEach(()=>{
        cy.visit("https://thinking-tester-contact-list.herokuapp.com/")
    })


    it("empty credentials",()=>{
        
        cy.get("#submit").click()
        cy.get("#error").should("have.text","Incorrect username or password")
        
    })

    it("invalid email and valid password",()=>{
        cy.get("#email").type("kamana55@gmail.com")
        cy.get("#password").type("123456789")
        cy.get("#submit").click()
        cy.get("#error").should("have.text","Incorrect username or password")

    })

    it("valid email and invalid password",()=>{
        cy.get("#email").type("kamana@gmail.com")
        cy.get("#password").type("123456")
        cy.get("#submit").click()
        cy.get("#error").should("have.text","Incorrect username or password")
    })

    it("valid credentials",()=>{
        cy.get("#email").type("kamana@gmail.com")
        cy.get("#password").type("1234567")
        cy.get("#submit").click()
        cy.get("div[class='main-content'] header h1").should("have.text","Contact List")
    })

    it("click on sign up",()=>{
        cy.get("#signup").click()
        cy.get("div[class='main-content'] h1").should("have.text","Add User")
    })
})