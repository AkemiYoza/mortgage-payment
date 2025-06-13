import styles from './styles.module.css'

export function RadioButton({text, id, name, value, ...props}) {
  return (
    <>
      <label className={styles.radioContainer} htmlFor={id}>
        <input id={id} type="radio" name={name} value={value} {...props} />
        <span className={styles.radioCustom}></span>
        {text}
      </label>
    </>
  );
}
