import { connectSearchBox } from 'react-instantsearch-dom'
import { Search, Cancel, ArrowLeft } from 'iconoir-react'
import searchStyles from '@/search.module.css'

const CustomInput = ({ refine }) => {
  return (
    <>
      <form id='formSearch' className={searchStyles.formSearch}>
        <div className={searchStyles.searchIcon}>
          <Search strokeWidth={2.5}></Search>
        </div>
        <input
          type='search'
          className={searchStyles.searchText}
          onChange={(e) => refine(e.currentTarget.value)}
          placeholder='Type to find a post'
        />
        <button type='reset' className={searchStyles.searchCancel} onClick={() => refine()}>
          <Cancel strokeWidth={2}></Cancel>
        </button>
        <button className={searchStyles.searchConfirm}>
          <ArrowLeft strokeWidth={2}></ArrowLeft>
        </button>
      </form>
    </>
  )
}

export default connectSearchBox(CustomInput)
