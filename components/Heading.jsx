import PropTypes from 'prop-types'

const Heading = ({ level, children, ...props }) => {
  const HeadingTag = `h${level}`

  return <HeadingTag {...props}>{children}</HeadingTag>
}
Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node,
}

export default Heading
