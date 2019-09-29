let PageObjects = function () {}

PageObjects.prototype = Object.create({}, {
    /** Armazenamento das variáveis encontradas na tela em variáveis simples */
    btn_SignUp: {get: function () { return element(by.className('link not-member')) }},
    
    field_FirstName: {get: function () { return element.all(by.className('input custom-input-size')).get(0) }},
    field_LastName: {get: function () { return element.all(by.className('input custom-input-size')).get(1) }},
    field_Email: {get: function () { return element.all(by.className('input custom-input-size')).get(2) }},
    field_Password: {get: function () { return element.all(by.className('input custom-input-size')).get(3) }},
    btn_Registrar: {get: function () { return element.all(by.className('button button-bg is-primary')).get(0) }},
    
    page_Title: {get: function () { return element(by.className('heading h-2')) }},
    profile_name_1: {get: function () { return element.all(by.className('heading h-4 text-center user-name')).get(0) }},
    profile_name_2: {get: function () { return element.all(by.className('heading h-3 text-center')).get(0) }},
    profile_name_3: {get: function () { return element.all(by.className('bar-link user-button')).get(0) }}
    
})

module.exports = PageObjects
