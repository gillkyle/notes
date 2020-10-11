import React from 'react';
import { Link } from 'gatsby';

import Header from '../gatsby-theme-andy/components/Header';

import '../style.css';

const Overview = ({ data }) => {
  return (
    <div className="text-gray-900 flex flex-col min-h-screen h-screen">
      <Header siteMetadata={data.site.siteMetadata} />
      <div className="note-container p-8 overflow-y-auto bg-white md:sticky flex flex-col flex-shrink-0">
        <h1>Graph Overview</h1>
        <p className="my-4">
          All pages are listed here, those that are in lowercase have yet to be written about
          themselves (though I intend to):
        </p>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(auto-fit,minmax(160px,1fr))` }}
        >
          {data.brain.nodes.map((node) => (
            <Link
              to={`/${node.slug}`}
              className="rounded p-2 transition duration-100 hover:bg-blue-100 no-underline border-solid"
            >
              <div className="">
                <h2 className="text-lg">{node.title}</h2>({node.inboundReferences.length} reference
                {!!node.inboundReferences.length && `s`})
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;

export const query = graphql`
  query BrainGraph {
    site {
      siteMetadata {
        title
      }
    }
    brain: allBrainNote(sort: { fields: title }) {
      nodes {
        title
        slug
        inboundReferences
        outboundReferences
      }
    }
  }
`;
