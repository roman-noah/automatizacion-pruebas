describe('Prueba E2E B', () => {
  it('Visita la página de inicio', () => {
    cy.visit('https://buggy.justtestit.org/');
    cy.contains('Buggy Rating');
  });
});