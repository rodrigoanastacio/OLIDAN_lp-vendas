import Head from 'next/head';

import Banner from './components/Banner';
import Card from './components/Card';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Olidan ateliê | Vestidos sob medidas</title>
        <meta
          name="description"
          content="Olidan Ateliê trabalha com vestidos desenvolvidos para cada noiva, de forma individual, assim como são os sonhos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <section className={styles.benefits}>
        <div className={styles.container}>
          <Card path="image.png" text="Texto alternativo" />
          <Card path="image.png" text="Texto alternativo" />
          <Card path="image.png" text="Texto alternativo" />
        </div>
      </section>
    </>
  );
}
