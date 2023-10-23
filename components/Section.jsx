import PropTypes from 'prop-types'

import Heading from './Heading.jsx'

const Section = ({ headingLevel, tocEntry, children }) => {
  const selfAnchor = `#${tocEntry.id}`
  return (
    <section id={tocEntry.id}>
      <header>
        <Heading level={headingLevel}>
          <a className="self-link" href={selfAnchor}></a>
          <span>{tocEntry.title}</span>
        </Heading>
        {tocEntry.lead ? <p>{tocEntry.lead}</p> : null}
      </header>
      {children}
    </section>
  )
}
Section.propTypes = {
  headingLevel: Heading.propTypes.level,
  tocEntry: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lead: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
}

export default Section
