import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle(): void {
    if (window.toggleActiveMenu) {
      window.toggleActiveMenu();
    }
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button onClick={handleToggle} type="button" className="action-close">
          ✕
        </button>
      </Navigation>
      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">Preencha o formulário abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password " placeholder="Senha" />

        <button type="submit">Prosseguir</button>

        <span className="terms">
          Esta página está sujeita à Política de privacidade a aos Termos de
          serviço.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
