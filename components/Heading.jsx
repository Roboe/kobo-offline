import PropTypes from 'prop-types'

const Heading = ({ level, id, title, lead, children, className, ...props }) => {
  const HeadingTag = 'h' + level
  const selfAnchor = '#' + id

  const classNames = [
    'title',
    `is-${2 + level}`,
    'is-capitalized',
    className ?? '',
  ].join(' ')
  return (
    <hgroup>
      <HeadingTag className={classNames} id={id} {...props}>
        <a className="self-link" href={selfAnchor}>
          {title ?? children}
        </a>
      </HeadingTag>
      {lead ? <p className="subtitle">{lead}</p> : null}
    </hgroup>
  )
}
Heading.propTypes = {
  level: PropTypes.oneOf([2, 3, 4, 5, 6]).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lead: PropTypes.string,
  children: PropTypes.node,
}

export default Heading
