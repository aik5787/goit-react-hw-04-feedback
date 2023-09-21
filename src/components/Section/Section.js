import PropTypes from 'prop-types';
import { Container,Tittle} from './Section.styled'

export const Section = ({ title, children }) => {
  return (
    <Container>
      <Tittle>{title}</Tittle>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};