import PropTypes from 'prop-types'

const TocItem = ({ branch }) => {
  const { id, title, ...rest } = branch
  const branchesEntries = Object.entries(rest).filter(
    ([key, value]) => typeof value === 'object' && !Array.isArray(value)
  )
  return (
    <li>
      <a href={'#' + id} className="panel-block">
        {title}
      </a>
      {branchesEntries.length > 0 ? (
        <TocList>
          {branchesEntries.map(([key, branch]) => (
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

const TocList = ({ children }) => {
  return <ol>{children}</ol>
}
TocList.propTypes = {
  children: PropTypes.node,
}

const TableOfContents = ({ toc }) => {
  return (
    <nav id="toc" className="panel is-shadowless">
      <p className="panel-tabs is-justify-content-flex-start">
        <a className="is-active">Index</a>
      </p>
      <TocList>
        {Object.entries(toc).map(([key, branch]) => (
          <TocItem key={key} branch={branch} />
        ))}
      </TocList>
    </nav>
  )
}
TableOfContents.propTypes = {
  toc: PropTypes.objectOf(TocItem.propTypes.branch).isRequired,
}

export default TableOfContents
