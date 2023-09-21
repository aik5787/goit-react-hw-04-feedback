import PropTypes from 'prop-types';
import { StatisticsContainer, FeedbackCounter } from './Statistics.styled'


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsContainer>
      <FeedbackCounter>Good: {good}</FeedbackCounter>
      <FeedbackCounter>Neutral: {neutral}</FeedbackCounter>
      <FeedbackCounter>Bad: {bad}</FeedbackCounter>
      <FeedbackCounter>Total: {total}</FeedbackCounter>
      <FeedbackCounter>Positive feedback: {positivePercentage}%</FeedbackCounter>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};