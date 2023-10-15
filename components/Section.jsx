import PropTypes from 'prop-types'

import Heading from './Heading.jsx'

const Content = ({ children }) => {
  return <div className="content">{children}</div>
}
Content.propTypes = {
  children: PropTypes.node,
}

const Collapsed = ({ summary, children }) => {
  return (
    <details className="block">
      <summary>{summary}</summary>
      {children}
    </details>
  )
}
Collapsed.propTypes = {
  summary: PropTypes.node,
  children: PropTypes.node,
}

const Section = ({ headingLevel, tocEntry, children }) => {
  return (
    <section className="block">
      <header className="block">
        <Heading
          level={headingLevel}
          id={tocEntry.id}
          title={tocEntry.title}
          lead={tocEntry.lead}
        />
      </header>
      {children}
    </section>
  )
}
Section.propTypes = {
  headingLevel: Heading.propTypes.level,
  tocEntry: PropTypes.shape({
    id: Heading.propTypes.id,
    title: Heading.propTypes.title,
    lead: Heading.propTypes.lead,
  }),
  children: PropTypes.node,
}

Section.Content = Content
Section.Collapsed = Collapsed
export default Section
