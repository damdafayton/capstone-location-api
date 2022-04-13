import styles from './Toggle.module.scss'

function Toggle({ onChange, checked = false, toggleLabel, className }) {
  return (
    <div className={`d-flex align-items-center ${className}`}>
      <label className={styles.switchLabel}>
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={onChange}
          checked={checked} />
        <span
          className={`${styles.beforeSpan} ${checked && styles.ballChecked}`}
        />
        <span
          className={`${styles.sliderSpan} ${checked ? styles.bg1 : styles.bg2}`}
        />
      </label>
      {toggleLabel &&
        <label className='mx-2 align-middle'>
          {toggleLabel}
        </label>
      }
    </div>
  )
}

export default Toggle