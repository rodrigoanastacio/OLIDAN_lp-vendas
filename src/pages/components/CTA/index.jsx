import styles from './styles.module.scss';

export default function CTA({ title, path }) {
  return (
    <a className={styles.cta} href={path}>
      {title}
    </a>
  );
}
