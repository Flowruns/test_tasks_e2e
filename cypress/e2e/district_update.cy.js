﻿describe('Реестр адресов. Редактирование созданного района', () => {
    it('Открываем карточку района для редактирования', () => {
        cy.fixture('districtData').then(data => {

            // Авторизируемся
            cy.userAuthorization();

            cy.log('Открываем реестр адресов');

            // Переходим на целевой url
            cy.visit('https://demo.app.stack-it.ru/fl/accounts')

            // Проверяем URL
            cy.url().should('eq', 'https://demo.app.stack-it.ru/fl/accounts');

            cy.log('Открываем созданный район');

            // Проверяем, что созданный район есть в реестре
            cy.get('tbody tr:last-child').should('be.visible').and('contain', 'Test');

            // Открываем созданный район
            cy.get('tbody tr:last-child').click();

            // Ждем открытие модалки создания района
            cy.wait(2000);

            // Проверяем, что окрылось модальное окно создания района
            cy.get('.v-dialog').should('be.visible');

            // Редактируем поле в модальном окне "Название района"
            cy.get('[data-test-id="Название района"]').type(data.updateDistrictName, {timeout: 3000});
            
            // Далее тесты недописаны по причине отсутствия тестовой площадки для написания тестов. (Текущая сессия постоянно
            // сбрасывается, необходим перелогин, под данными мне логином и паролем авторизуется еще несколько пользователей)
            
        })
    });
});