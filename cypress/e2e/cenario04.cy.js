describe("Procurar documento existente no Google Drive", () => {
  beforeEach(() => {
    // Realize o login no Google Drive aqui
    cy.visit("https://accounts.google.com/AddSession/identifier?hl=pt-BR&continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2F%3Fpli%3D1&service=writely&ec=GAlAMQ&authuser=0&theme=glif&flowName=GlifWebSignIn&flowEntry=AddSession");
    cy.get('input[type="email"]').type("stephanienunes559@gmail.com");
    cy.get("#identifierNext").click();
    cy.get('input[type="password"]').type("123456@st");
    cy.get("#passwordNext").click();
    cy.url().should("include", "drive.google.com");
  });

  it("Deve encontrar um documento existente na pesquisa", () => {
    // Localize o campo de pesquisa
    cy.get('[aria-label="Pesquisar no Drive"]').should('be.visible').click();

    // Insira o termo de pesquisa desejado (por exemplo, o nome de um documento existente)
    cy.get('[aria-label="Pesquisar no Drive"]').type("Documento_teste");

    // Acione a pesquisa (por exemplo, pressionando Enter)
    cy.get('[aria-label="Pesquisar no Drive"]').type('{enter}');

    // Aguarde até que os resultados da pesquisa sejam exibidos (você pode esperar por elementos específicos na página)
    cy.contains("Resultados da pesquisa").should('exist');
  });
});
