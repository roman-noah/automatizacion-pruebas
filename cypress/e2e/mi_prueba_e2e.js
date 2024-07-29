describe('Prueba E2E', () => {
  it('Visita la página de inicio', () => {
    cy.visit('https://buggy.justtestit.org/');
    cy.contains('Buggy
Cars
Rating');
  });
});