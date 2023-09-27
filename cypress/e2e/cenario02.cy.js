describe("Teste de Login bem-sucedido no Google Drive", () => {
  beforeEach(() => {
    cy.visit("https://accounts.google.com/AddSession/identifier?hl=pt-BR&continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2F%3Fpli%3D1&service=writely&ec=GAlAMQ&authuser=0&theme=glif&flowName=GlifWebSignIn&flowEntry=AddSession");
  });

  it("Deve fazer login com sucesso", () => {
    cy.get('input[type="email"]').type("stephanienunes559@gmail.com");
    cy.get("#identifierNext").click();
    cy.get('input[type="password"]').type("123456@st");
    cy.get("#passwordNext").click();
    cy.url().should("include", "drive.google.com");
  });
});
