describe('Cenário 1: Visitar a página inicial do Google Drive', () => {
  it('deve visitar a página inicial do Google Drive', () => {
    cy.visit('https://drive.google.com')
    // Verificar se o título contém a palavra "Google"
    cy.title().should('include', 'Google')
  })
})
