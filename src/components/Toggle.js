import PropTypes from 'prop-types';
import styles from './Toggle.module.scss';

function Toggle({
  onChange, checked = false, toggleLabel, className,
}) {
  return (
    <div className={`d-flex align-items-center ${className}`}>
      <label className={styles.switchLabel} htmlFor="toggle">
        <input
          id="toggle"
          className={styles.checkbox}
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <span
          className={`${styles.beforeSpan} ${checked && styles.ballChecked}`}
        />
        <span
          className={`${styles.sliderSpan} ${checked ? styles.bg1 : styles.bg2}`}
        />
      </label>
      {toggleLabel
        && (
          <span className="mx-2 align-middle">
            {toggleLabel}
          </span>
        )}
    </div>
  );
}

export default Toggle;

Toggle.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  toggleLabel: PropTypes.string,
  className: PropTypes.string,
};
