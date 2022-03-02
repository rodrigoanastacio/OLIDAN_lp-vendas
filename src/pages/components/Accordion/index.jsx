import { useState } from 'react';

import styles from './styles.module.scss';

export default function Accordion() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.item}>
        <button>
          <strong>1. Como consultar a minha nota do Enem?</strong>
        </button>

        <div className={styles.content}>
          <p>
            Lembre-se que a pontuação de 2021 estará disponível na página do
            participante a partir do dia 11 de Fevereiro de 2022. Para
            consultar, siga as instruções abaixo e saiba quanto tirou na última
            prova ou em anos anteriores:
          </p>
        </div>
      </div>
    </div>
  );
}
