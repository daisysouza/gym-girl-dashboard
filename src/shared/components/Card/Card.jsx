import styles from './Card.module.css';

export default function Card({ children, variant = 'pink', className = '' }) {
  return (
    <section
      className={`
        ${styles.card}
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
