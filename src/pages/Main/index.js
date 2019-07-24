import React from 'react';
import { toast } from 'react-toastify';

import { Container, Buttons } from './styles';

function Main() {
  function handleDefault() {
    toast('Mensagem default');
  }
  function handleError() {
    toast.error('Mensagem error');
  }
  function handleSuccess() {
    toast.success('Mensagem success');
  }
  function handleInfo() {
    toast.info('Mensagem info');
  }
  function handleWarn() {
    toast.warn('Mensagem warn');
  }
  function handleCustom() {
    toast('Mensagem customizada', {
      position: toast.POSITION.TOP_LEFT,
      className: 'sua-classe',
    });
  }

  return (
    <Container>
      <Buttons>
        <button type="button" onClick={handleDefault}>
          Default
        </button>
        <button type="button" onClick={handleError}>
          Error
        </button>
        <button type="button" onClick={handleSuccess}>
          Success
        </button>
        <button type="button" onClick={handleWarn}>
          Warn
        </button>
        <button type="button" onClick={handleInfo}>
          Info
        </button>
        <button type="button" onClick={handleCustom}>
          Custom
        </button>
      </Buttons>
    </Container>
  );
}

export default Main;
