import styles from "./FeedbackButton.module.css";
const FeedbackButton = () => {
  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.icons}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <title>Share</title>
          <path
            d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-3-4l-7-3m7-7l-7 3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          ></path>
        </svg>
        <p>Share</p>
      </div>
      <div className={styles.icons}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <title>Edit</title>
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.87 3L3 17v4h4L22 7.09z"
            ></path>
            <path d="M15 7l3 3"></path>
          </g>
        </svg>
        <p>Feedback</p>
      </div>
      <div className={styles.icons}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <title>Help</title>
          <g fill="none" fillRule="evenodd">
            <path
              d="M11 18v-2h2v2h-2zm1-12c3.401 0 4 1.757 4 2.925 0 1.47-.627 1.88-1.4 2.38-.774.485-1.438 1.061-1.6 1.954l-.072.741H11v-.846c.108-1.32.681-1.716 1.4-2.186.703-.469 1.6-1.013 1.6-1.83 0-.925-1.046-1.454-2-1.454-1.296 0-1.982 1.03-2 2.105H8C8.054 7.623 9.372 6 12 6z"
              fill="currentColor"
            ></path>
            <circle
              stroke="currentColor"
              strokeWidth="2"
              cx="12"
              cy="12"
              r="9"
            ></circle>
          </g>
        </svg>
        <p>Get Help</p>
      </div>
    </div>
  );
};
export default FeedbackButton;
