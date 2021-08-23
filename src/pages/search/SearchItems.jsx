import React, { useContext } from 'react';
import Spinner from '../../components/spinner/Spinner';
import { SearchContext } from '../../context/searchContext/SearchContext';
import SearchListItems from './SearchListItems';


const SearchItems = () => {

    const { loading, searchItem } = useContext(SearchContext);
    
    if (loading) {
        return <Spinner />
    }else {
        return (
            <div className="container mt-5">
               <div className="row">
                    {!loading && searchItem &&
                        searchItem.map((searchItems) => (
                            <div className="col-lg-6" key={searchItems.id}>
                                <SearchListItems searchItems={searchItems} />
                            </div>
                        )
                    )}
               </div>
            </div>
        )
    }
    
}

export default SearchItems;
