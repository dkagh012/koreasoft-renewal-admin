import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const HeaderSection = ({
    title,
    breadcrumb,
    cancelLink,
    submitText,
    onSubmit,
    text,
    editText,
    editLink,
    deleteText,
    deleteLink,
}) => {
    return (
        <div className={styles.top}>
            {/* 🔹 상단 제목 & 링크 */}
            <div className={styles.listTitleBox}>
                <div className={styles.link}>
                    <Link to={breadcrumb.path}>{breadcrumb.text}</Link>
                    <h3>{title}</h3>
                </div>
                <div className={styles.titleBox}>
                    <div className={styles.title}>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.action}>
                        {editText && (
                            <Link className={styles.edit} to={editLink}>
                                수정
                            </Link>
                        )}
                        {deleteText && (
                            <Link className={styles.delete} to={deleteLink}>
                                삭제
                            </Link>
                        )}
                        <Link className={styles.back} to={cancelLink}>
                            {text}
                        </Link>
                        {submitText && (
                            <button type="submit" onClick={onSubmit}>
                                {submitText}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ✅ `props` 검증
HeaderSection.propTypes = {
    title: PropTypes.string.isRequired,
    breadcrumb: PropTypes.shape({
        path: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
    cancelLink: PropTypes.string.isRequired,
    submitText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

// ✅ 기본값 설정
HeaderSection.defaultProps = {
    submitText: '저장',
};

export default HeaderSection;
