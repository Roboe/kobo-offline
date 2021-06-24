const TocList = ({ unordered, children }) => {
  const List = unordered ? 'ul' : 'ol'
  return <List>{children}</List>
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

export default TableOfContents
