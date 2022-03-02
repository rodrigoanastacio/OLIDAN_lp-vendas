import { FaWhatsapp } from 'react-icons/fa';

import styles from './styles.module.scss';

export default function CTA({ title, path }) {
  return (
    <a className={styles.cta} href={path}>
      <FaWhatsapp className="icon" /> {title}
    </a>
  );
}
