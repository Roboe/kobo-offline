const Heading = ({ level, children, ...props }) => {
  const HeadingTag = level < 6 ? `h${level}` : 'h6'

  return <HeadingTag {...props}>{children}</HeadingTag>
}

export default Heading
