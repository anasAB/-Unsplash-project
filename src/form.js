import React from 'react'

const Form = (props) => {
    const {searchPhotos,setQuery,query} = props

    return (
        <form className="form" onSubmit={searchPhotos}>
            <input
                type="text"
                name="query"
                className="input"
                placeholder={`Try "dog" or "apple"`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="button">
                Search
            </button>
        </form>
    )
}

export default Form