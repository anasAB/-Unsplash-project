import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import Form from "./form";
import Photo from "./photo";

const unsplash = new Unsplash({
    accessKey: "jezfftrc4DGVp-WekQPUyWEpoufdUx5pUXE1PdhfNtM",
});


export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    const searchPhotos = async (e) => {
        e.preventDefault();

        unsplash.search
            .photos(query)
            .then(toJson)
            .then((json) => {
                console.log('JSON', json);
                setPics(json.results);
            });
    };

    return (
        <>
            <Form searchPhotos={searchPhotos} query={query} setQuery={setQuery} />

            <section className="wrapper">
                <div className="container-fostrap">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                {pics.map((pic) => (
                                    <div className="col-xs-12 col-sm-6" key={pic.id}>
                                        <Photo pic={pic} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
