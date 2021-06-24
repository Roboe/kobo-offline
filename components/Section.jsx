import Heading from './Heading.jsx'

const Section = ({ headingLevel, id, title, lead, children }) => {
  const selfAnchor = `#${id}`
  return (
    <section id={id}>
      <header>
        <Heading level={headingLevel}>
          <a className="self-link" href={selfAnchor}></a>
          <span>{title}</span>
        </Heading>
        {lead ? <p>{lead}</p> : null}
      </header>
      {children}
    </section>
  )
}

export default Section
