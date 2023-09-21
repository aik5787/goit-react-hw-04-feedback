import PropTypes from 'prop-types';

import { ButtonContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleFeedbackClick }) => {
  return (
    <ButtonContainer>
      {options.map(option => (
        <Button key={option} onClick={() => handleFeedbackClick(option)}>
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFeedbackClick: PropTypes.func.isRequired,
};
