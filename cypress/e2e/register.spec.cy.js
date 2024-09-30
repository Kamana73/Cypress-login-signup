describe("Register page",()=>{


    beforeEach(()=>{
        cy.visit("https://thinking-tester-contact-list.herokuapp.com/")
        cy.get("#signup").click()
        
    })

    it("empty credentials",()=>{
        // cy.get("#signup")
        cy.get("#submit").click()
        cy.wait(3000)
    })

    it("empty first name field",()=>{
        
        cy.get("#lastName").type("adhikari")
        cy.get("#email").type("kamana1235.com")
        cy.get("#password").type("123456789")
        cy.get("#submit").click()
        cy.get("#error").should("have.text",("User validation failed: firstName: Path `firstName` is required."))
        cy.wait(3000)
    })

    it("empty last name field",()=>{
        cy.get("#firstName").type("kamana")
        
        cy.get("#email").type("kamana4568.com")
        cy.get("#password").type("123456789")
        cy.get("#submit").click()
        cy.get("#error").should("have.text",("User validation failed: lastName: Path `lastName` is required."))
        cy.wait(3000)
    })

    it("empty email field",()=>{
        cy.get("#firstName").type("kamana")
        cy.get("#lastName").type("adhikari")
        
        cy.get("#password").type("123456789")
        cy.get("#submit").click()
        cy.get("#error").should("have.text",("User validation failed: email: Email is invalid"))
        cy.wait(3000)
    })

    it("empty password field",()=>{
        cy.get("#firstName").type("kamana")
        cy.get("#lastName").type("adhikari")
        cy.get("#email").type("kamana78912.com")
        
        cy.get("#submit").click()
        cy.get("#error").should("have.text",("User validation failed: password: Path `password` is required."))
        cy.wait(3000)
    })

    it("clicking cancel button",()=>{
        cy.get("#cancel").click()
        cy.get("body h1").should("have.text",("Contact List App"))
        cy.wait(3000)
    })

    it("invalid email",()=>{
        cy.get("#firstName").type("kamana")
        cy.get("#lastName").type("adhikari")
        cy.get("#email").type("kamana45.com")
        cy.get("#password").type("123456789")
        cy.get("#submit").click()
        cy.get("#error").should("have.text",("User validation failed: email: Email is invalid"))
        cy.wait(3000)
    })


    it("invalid password",()=>{
        cy.get("#firstName").type("kamana")
        cy.get("#lastName").type("adhikari")
        cy.get("#email").type("kamana78@gmail.com")
        cy.get("#password").type("123456")
        cy.get("#submit").click()
        cy.get("#error").should("have.text","User validation failed: password: Path `password` (`123456`) is shorter than the minimum allowed length (7).")
        cy.wait(3000)
    })

    it("Duplicate email address",()=>{
        cy.get("#firstName").type("kamana")
        cy.get("#lastName").type("adhikari")
        cy.get("#email").type("kamana23@gmail.com")
        cy.get("#password").type("1234567")
        cy.get("#submit").click()
        cy.get("#error").should("have.text","Email address is already in use")
        cy.wait(3000)
    })

    it("valid input",()=>{
        cy.get("#firstName").type("kamana")
        cy.get("#lastName").type("adhikari")
        cy.get("#email").type("kamana1234567898@gmail.com")
        cy.get("#password").type("1234567")
        cy.get("#submit").click()
        cy.get("div[class='main-content'] header h1").should("have.text","Contact List")

    })
})