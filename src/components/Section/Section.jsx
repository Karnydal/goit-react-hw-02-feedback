
import propTypes from 'prop-types';
import { StatisticSection } from './Section.styled'

const Section = ({ title, children }) => {
    return (
        <StatisticSection>
            <h1>{title}</h1>
            {children}
        </StatisticSection>
    )
};


Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Section;