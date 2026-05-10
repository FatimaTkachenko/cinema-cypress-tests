describe('Мой первый тест', () => {
  it('Открыть example.com', () => {
    cy.visit('https://example.com');
    cy.contains('Example Domain').should('be.visible');
  });
});