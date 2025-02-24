import styles from './index.module.scss';

const InputBox = ({ id, label, placeholder, value, onChange }) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={id}>{label}</label>
            <input type="password" id={id} placeholder={placeholder} value={value} onChange={onChange} required />
        </div>
    );
};

export default InputBox;
