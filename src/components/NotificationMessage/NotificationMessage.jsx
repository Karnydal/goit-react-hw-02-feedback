import propTypes from 'prop-types';
import { Message } from './NotificationMessage.styled';

export const NotificationMessage = ({ message }) => {
  return <Message>{message}</Message>;
};

NotificationMessage.propTypes = {
  message: propTypes.string.isRequired,
};
