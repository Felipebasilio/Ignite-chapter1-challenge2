import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewtransactionModal: () => void;
}

export function Header(props: HeaderProps) {


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={props.onOpenNewtransactionModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  );
}
