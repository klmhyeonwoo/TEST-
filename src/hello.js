
import styles from './hello.module.css';

function Title() {
  return <div className={styles.title}> 헤뷰, 브랜딩 프로젝트 </div>;
}

function Subject() {
  return <div className={styles.subject}> 해뷰 프로젝트의 브랜딩 <br /> 세상의 아름다움을 말하다 </div>;
}

export {Title, Subject};
