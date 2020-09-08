import React from 'react';
import { Link } from 'gatsby';

import Header from '../gatsby-theme-andy/components/Header';

import '../style.css';

const Overview = ({ data }) => {
  console.log(data);
  return (
    <div className="text-gray-900 flex flex-col min-h-screen h-screen">
      <Header siteMetadata={data.site.siteMetadata} />
      <div className="note-container px-4 overflow-y-auto bg-white md:sticky flex flex-col flex-shrink-0">
        <h1>Graph Overview</h1>
        <p className="my-4">
          All pages are listed here, those that are in lowercase have yet to be written about
          themselves (though I intend to):
        </p>
        {data.brain.nodes.map((node) => (
          <div className="py-1">
            <Link to={`/${node.slug}`}>{node.title}</Link>: ({node.inboundReferences.length}{' '}
            reference{!!node.inboundReferences.length && `s`})
          </div>
        ))}
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
    brain: allBrainNote {
      nodes {
        title
        slug
        inboundReferences
        outboundReferences
      }
    }
  }
`;
