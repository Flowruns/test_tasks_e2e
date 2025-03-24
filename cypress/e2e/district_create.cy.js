describe('Реестр адресов. Создание района', () => {
    it('Создание района', () => {
        cy.fixture('districtData').then(data => {
            
            // Авторизируемся
            cy.userAuthorization();
            
            cy.log('Открываем реестр адресов');

            // Нажимаем на кнопку в сайдбаре "Адресный фонд"
            cy.get('[data-test-id="Адресный фонд"]').click();

            // Проверяем URL
            cy.url().should('eq', 'https://demo.app.stack-it.ru/fl/accounts/acc_menu');

            // Нажимаем на кнопку "Адреса проживающих"
            cy.get('[data-test-id="Адреса проживающих"]').click();

            // Проверяем URL
            cy.url().should('eq', 'https://demo.app.stack-it.ru/fl/accounts');

            cy.log('Создаем район');

            // Нажимаем на кнопку в навбаре реестра "+"
            cy.get('[data-cy="btn-add"]').click();

            // Нажимаем на пункт меню "Район"
            cy.get('div.menuable__content__active :first-child[data-cy="stack-menu-list-item"]').click();

            // Ждем открытие модалки создания района
            cy.wait(2000);
            
            // Проверяем, что окрылось модальное окно создания района
            cy.get('.v-dialog').should('be.visible');

            // Заполняем поле в модальном окне "Название района"
            cy.get('[data-test-id="Название района"]').type(data.districtName, {timeout: 3000});

            // Нажимаем на кнопку в модальном окне "Внести"
            cy.get('.v-dialog [data-cy="btn-save"]').click();

            cy.log('Проверка созданного района в реестре');
            
            // Проверяем, что реестр отобразился и район создался
            cy.rowsCountBeforeDelete();
        })
    });
});