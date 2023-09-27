import 'cypress-file-upload';

describe("Teste de Login e Upload de Arquivo no Google Drive", () => {
  beforeEach(() => {
    // Visite a página de login do Google Drive
    cy.visit("https://accounts.google.com/AddSession/identifier?hl=pt-BR&continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2F%3Fpli%3D1&service=writely&ec=GAlAMQ&authuser=0&theme=glif&flowName=GlifWebSignIn&flowEntry=AddSession");
  });

  it("Deve fazer login com sucesso e fazer upload de arquivo", () => {
    // Preencha o campo de e-mail e clique em "Próxima"
    cy.get('input[type="email"]').type("stephanienunes559@gmail.com");
    cy.get("#identifierNext").click();

    // Preencha o campo de senha e clique em "Próxima"
    cy.get('input[type="password"]').type("123456@st");
    cy.get("#passwordNext").click();

    // Verifique se a URL redirecionou para o Google Drive, indicando um login bem-sucedido
    cy.url().should("include", "drive.google.com");

    // Clique no botão "Novo"
    cy.contains("Novo").click();

    // Selecione a opção "Criar arquivo"
    cy.contains("Documentos Google").click();

    //Quando ele rodar pra criar o arquivo do Documentos Google, você pode conferir que vai abrir 
    //uma aba do documentos google pra você editar um novo documento

  });
});
