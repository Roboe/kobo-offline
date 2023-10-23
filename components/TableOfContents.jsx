import PropTypes from 'prop-types'

const TocList = ({ children }) => {
  return <ol>{children}</ol>
}
TocList.propTypes = {
  children: PropTypes.node,
}

const TocItem = ({ branch }) => {
  const { id, title, ...branches } = branch
  return (
    <li>
      <a href={`#${id}`}>{title}</a>
      {branches ? (
        <TocList>
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
