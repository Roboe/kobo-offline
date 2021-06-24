import PropTypes from 'prop-types'

const TocList = ({ unordered, children }) => {
  const List = unordered ? 'ul' : 'ol'
  return <List>{children}</List>
}
TocList.propTypes = {
  unordered: PropTypes.bool,
  children: PropTypes.node,
}

const TocItem = ({ branch }) => {
  const { id, title, unordered, ...branches } = branch
  return (
    <li>
      <a href={`#${id}`}>{title}</a>
      {branches ? (
        <TocList unordered={unordered}>
          {Object.entries(branches).map(([key, branch]) => (
            <TocItem key={key} branch={branch} />
          ))}
        </TocList>
      ) : null}
    </li>
  )
}
TocItem.propTypes = {
  branch: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    unordered: PropTypes.bool,
  }).isRequired,
}

const TableOfContents = ({ toc }) => {
  return (
    <>
      <nav id="toc" className="toc">
        <TocList>
          {Object.entries(toc).map(([key, branch]) => (
            <TocItem key={key} branch={branch} />
          ))}
        </TocList>
      </nav>
    </>
  )
}
TableOfContents.propTypes = {
  toc: PropTypes.objectOf(TocItem.propTypes.branch).isRequired,
}

export default TableOfContents
