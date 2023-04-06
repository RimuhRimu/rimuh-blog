import { connectStateResults, Highlight } from 'react-instantsearch-dom'
import Link from 'next/link'

import searchStyles from '@/search.module.css'

const CustomStatus = connectStateResults(({ searchState, searchResults }) => {
  const validQuery = searchState.query?.length >= 2
  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (<div><p>Aw snap! NO search results were found.</p></div>)}
      {searchResults?.hits.length > 0 && validQuery && (
        <ul className={searchStyles.resultBox}>
          {searchResults.hits.map((hit) => (
            <li key={hit.objectID} className={searchStyles.hitItem} >
              <Link href={`/posts/${hit.name}`}>
                <div>
                  <Highlight hit={hit} attribute='title' tagName='mark'></Highlight>
                  <small>
                    <Highlight hit={hit} attribute='content' tagName='mark'></Highlight>
                  </small>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
})

export default CustomStatus
