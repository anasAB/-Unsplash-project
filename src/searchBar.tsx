import React from 'react'

const SearchBar = (props: { query: string | number, setQuery: (value) => void }) => {
    const { query, setQuery } = props

    return (
        <form className="form">
            <input
                type="text"
                name="query"
                className="input"
                placeholder={`Try "dog" or "apple"`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    )
}

export default SearchBar;