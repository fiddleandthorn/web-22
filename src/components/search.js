import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { connectHits, InstantSearch, Index, SearchBox, connectStateResults } from 'react-instantsearch-dom';

const Hits = connectHits(({ hits }) => (
    <div>
        {hits.length ? (
            <div className="post-feed">
                {hits.map((hit) => {
                    return (
                        <div className="result">
                          <a href={hit.uri}>
                              <p className="result-title">{hit.title}</p>
                          </a>
                        </div>
                    );
                })}
            </div>
        ) : (
            <p className="text-muted">There were no results for your query. Please try again.</p>
        )}
    </div>
));

const Results = connectStateResults(({ searchState, title }) =>
  searchState && searchState.query ? (
    <>
      <p className="title">{title}</p>
      <Hits />
    </>
  ) : (
    <></>
  )
);

export default function Search({ indexName }) {
    // const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);
    const algoliaClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);

    const searchClient = {
      ...algoliaClient,
      search(requests) {
        if (requests.every(({ params }) => !params.query)) {
          return Promise.resolve({
            results: requests.map(() => ({
              hits: [],
              nbHits: 0,
              nbPages: 0,
              page: 0,
              processingTimeMS: 0,
            })),
          });
        }

        return algoliaClient.search(requests);
      },
    };

    return (
          <InstantSearch indexName={indexName} searchClient={searchClient}>
            <div className="container">
              <div className="full">
                <SearchBox />
              </div>
            </div>
            <div className="container results">
              <div className="third">
                <Index indexName="Plants">
                  <Results title="Plant Care Guides" />
                </Index>
              </div>
              <div className="two-thirds">
                <Index indexName="Posts">
                  <Results title="Journal Posts" />
                </Index>
              </div>
            </div>
          </InstantSearch>
    );
}
