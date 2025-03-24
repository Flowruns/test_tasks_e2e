/**
 * Кастомная команда для авторизации пользователя
 */
Cypress.Commands.add('userAuthorization', () => {
    
    // Используем фикстуру с данными логина
    cy.fixture('loginData').then(data => {

        // Переходим на целевой url
        cy.visit(data.url)

        // Заполняем поле "Логин"
        cy.get('input#VInput71').type(data.login, {timeout: 5000});

        // Заполняем поле "Пароль"
        cy.get('input#VInput75').type(data.password);

        // Нажимаем на кнопку "Войти"
        cy.get('button[data-cy="submit-btn"]').click();

        // Ждем авторизацию
        cy.wait(2000);

        // Проверяем URL
        cy.url().should('eq', data.url);
    })
})

/**
 * Проверка кол-ва строк реестра после создания записи 
 */
Cypress.Commands.add('rowsCountBeforeDelete', () => {
    
    // Проверяем, что таблица реестра есть
    cy.get('.v-data-table__wrapper table').should('be.visible');

    // Проверяем,
    cy.get('.v-data-table__wrapper table').find('tr').should('have.length', 5);
})

/**
 * Ожидание, что кол-во строк в реестер после удаления будет равно - 4
 */
Cypress.Commands.add('rowsCountAfterDelete', () => {

    // Проверяем, что таблица реестра есть
    cy.get('.v-data-table__wrapper table').should('be.visible');

    // Проверяем,
    cy.get('.v-data-table__wrapper table').find('tr').should('have.length', 4);
})