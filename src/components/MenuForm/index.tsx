import React from 'react';

import {
  Container,
  Navigation,
  DropboxLogo,
  Form,
  GoogleIcon,
  GoogleButton,
} from './styles';

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
        <span className="subtitle">
          ou <a href="/">acesse sua conta</a>
        </span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password " placeholder="Senha" />

        <button type="submit" className="register">
          Registre-se
        </button>
        <GoogleButton type="submit">
          <GoogleIcon />
          Registrar-se pelo Google
        </GoogleButton>

        <span className="terms">
          Esta página está sujeita à Política de privacidade a aos Termos de
          serviço.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
