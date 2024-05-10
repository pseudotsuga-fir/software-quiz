import cx from "classnames";
import styles from "./TextInput.module.scss";

export default function TextInput({
  label,
  placeholder,
  onChange,
  value,
  className,
  invalid,
  required,
}: {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  invalid?: boolean;
  required?: boolean;
}): React.ReactElement {
  return (
    <div
      className={cx(styles.textInput, className, { [styles.invalid]: invalid })}
    >
      {label && <label>{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          onChange?.(e.currentTarget.value);
        }}
        value={value}
        required={required}
      />
    </div>
  );
}
