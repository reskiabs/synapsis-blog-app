import styles from "./pagination.module.css";

const Pagination = ({ onPrev, onNext, currentPage, totalItems }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage * 5 >= totalItems;

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onPrev} disabled={isFirstPage}>
        Previous
      </button>
      <button className={styles.button} onClick={onNext} disabled={isLastPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
