import styles from './styles.module.scss';

export default function Card({ path, text }) {
  return (
    <article className={styles.cardImage}>
      <img src={path} alt={text} />
    </article>
  );
}
