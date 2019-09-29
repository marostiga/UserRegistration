/** "Export" da classe de Page Objects */
let PageObjects = require('../page-objects/po')

describe('Prototype User Registrations', () => {
    
    /** Variáveis utilizadas para cadastrar usuários (dados do usuário de teste)*/
    let firstName = 'Usuario Teste First Name'
    let lastName = 'Usuario Teste Last Name'
    let eMail = 'email_usuario_teste3@teste.com.br'
    let pwd = 'password_teste'

    beforeEach( () => {
        /** "Faz com que o protractor funcione para aplicações Non-angular" */
        browser.ignoreSynchronization = true

        /** Instância do Script dos objetos */
        pageObjects = new PageObjects()

        browser.get(browser.baseUrl)
    })

    it('Register User', () => {
        
        /** Clica no botão para de registrar */
        waitToClick(pageObjects.btn_SignUp, 10000, "Botão Sign Up")

        /** Preenche os dados de cadastro conforme as variaveis declaradas inicialmente */
        waitToSendKeys(pageObjects.field_FirstName, firstName, 10000, "Campo First Name")
        waitToSendKeys(pageObjects.field_LastName, lastName, 10000, "Campo Last Name")
        waitToSendKeys(pageObjects.field_Email, eMail, 10000, "Campo E-mail")
        waitToSendKeys(pageObjects.field_Password, pwd, 10000, "Campo Password")

        /** Clica no botão Registrar */
        waitToClick(pageObjects.btn_Registrar, 10000, "Botão Registrar")

        /** Valida o título da página de login e valida o nome do usuário na tela em determinados campos */
        waitToEqual(pageObjects.page_Title, 'Profile')
        waitToEqual(pageObjects.profile_name_1, firstName+" "+lastName)
        waitToEqual(pageObjects.profile_name_2, "Welcome, "+firstName+" "+lastName+"!")
        waitToEqual(pageObjects.profile_name_3, firstName+" "+lastName)
 
        
    })

})

/** Funções genéricas para tratamento de Wait em páginas Non-angular */

function waitToClick(element, timeOut=7000, customMessage=''){
    browser.wait(element, timeOut, "Elemento não encontrado! - "+customMessage)
    element.click()
}

function waitToSendKeys(element, value, timeOut=7000, customMessage=''){
    browser.wait(element, timeOut, "Elemento não encontrado! - "+customMessage)
    element.clear()
    element.sendKeys(value)
}

function waitToEqual(element, value, timeOut=15000, customMessage=''){
    browser.wait(element, timeOut, "Elemento não encontrado! - "+customMessage)
    element.getText().then((text) => { expect(text).toEqual(value) })
}
/** ------------------------------------------------------------------ */