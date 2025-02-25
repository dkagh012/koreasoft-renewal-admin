import styles from './index.module.scss';
import PropTypes from 'prop-types';

const InputBox = ({ id, label, type = 'text', placeholder = '', value, onChange, disabled = false }) => {
    return (
        <div className={`${styles.inputWrapper} ${disabled ? styles.disabled : ''}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type={type === 'text' || type === 'password' || type === 'number' ? type : 'text'}
                id={id}
                placeholder={placeholder}
                value={value || ''} // ✅ value가 undefined일 경우 ''로 설정
                onChange={onChange}
                disabled={disabled} // ✅ `disabled`를 올바르게 적용
                className={disabled ? styles.readOnly : ''}
                required
            />
        </div>
    );
};

InputBox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'number']),
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};

InputBox.defaultProps = {
    type: 'text',
    placeholder: '',
    value: '',
    onChange: () => {}, // ✅ `onChange`가 없어도 에러 방지
    disabled: false,
};

export default InputBox;
