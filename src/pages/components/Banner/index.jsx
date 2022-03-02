import Image from 'next/image';

import CTA from '../CTA';

import styles from './styles.module.scss';

export default function Banner({ children }) {
  return (
    <header className={styles.banner}>
      <img className={styles.bgImage} src="bg-hero.svg" alt="Fundo do banner" />

      <div className={styles.container}>
        <div className={styles.headline}>
          <img src="olidan-logo.png" alt="Olidan logo" width="320" />

          <h1>
            Se sinta única e especial em um vestido feito sob medida para o seu
            corpo e estilo
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non
            debitis, tempora obcaecati ex expedita consectetur rem, optio
            adipisci quisquam aperiam voluptate, eum autem voluptates.
          </p>

          <CTA title="Orçamento Agora" path="https://google.com" />
        </div>
      </div>
    </header>
  );
}
