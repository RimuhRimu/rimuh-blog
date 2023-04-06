import { Configure, InstantSearch } from "react-instantsearch-dom";
import * as algolia from "algoliasearch/lite";

import CustomBox from "@/search/search-box";
import CustomHits from "@/search/custom-hits";

import searchStyles from "@/search.module.css";

const applicationID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const publicKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY_SEARCH;
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

const client = algolia.liteClient(applicationID, publicKey);

const SearchBar = () => {
  return (
    <>
      <div className="search">
        <InstantSearch
          searchClient={client}
          indexName={indexName}
        >
          <Configure hitsPerPage={2}></Configure>
          <CustomBox></CustomBox>
          <div className={searchStyles.hits}>
            <CustomHits></CustomHits>
          </div>
        </InstantSearch>
      </div>
    </>
  );
};

export default SearchBar;
