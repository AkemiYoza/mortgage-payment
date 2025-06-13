import styles from './styles.module.css'

export function Input({label, icon, type, id, iconPosition, ...props}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>

      <div className={styles.inputBox}>
        {iconPosition === 'left' && (
          <div className={styles.icon}>
            {icon}
          </div>
        )}
        <input
          className={styles.input}
          type={type}
          id={id}
          {...props}
        />
        {iconPosition === 'right' && (
          <div className={styles.icon}>
            {icon}
          </div>
        )}
      </div>
    </>
  );
}
