import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import React from 'react';
import { LinkToStacked } from 'react-stacked-pages-hook';

import useWindowWidth from '../../utils/useWindowWidth';
import components from './MdxComponents';

const BrainNote = ({ note }) => {
  const [width] = useWindowWidth();
  let references = [];
  let referenceBlock;
  if (note.inboundReferenceNotes != null) {
    const RefLink = width < 768 ? Link : LinkToStacked;
    references = note.inboundReferenceNotes.map((reference) => (
      <RefLink
        className="no-underline hover:text-gray-700"
        to={reference.slug === 'about' ? `about` : `/${reference.slug}`} // hack
        key={reference.slug}
      >
        <div className="py-2">
          <h5 className="">{reference.title}</h5>
          <p className="text-sm m-0">{reference.childMdx.excerpt}</p>
        </div>
      </RefLink>
    ));

    if (references.length > 0) {
      referenceBlock = (
        <>
          <h3>Referred in</h3>
          <div className="mb-4">{references}</div>
          <hr className="mx-auto w-32" />
        </>
      );
    }
  }

  const popups = {};
  if (note.outboundReferenceNotes) {
    note.outboundReferenceNotes
      .filter((reference) => !!reference.childMdx.excerpt)
      .forEach((ln, i) => {
        popups[ln.slug] = (
          <div
            id={ln.slug}
            className="w-64 p-4 bg-gray-100 rounded-lg shadow-lg border border-amber-200"
          >
            <h5 className="mb-2">{ln.title}</h5>
            <p className="text-sm">{ln.childMdx.excerpt}</p>
          </div>
        );
      });
  }

  const AnchorTagWithPopups = (props) => (
    <components.a {...props} popups={popups} noPopups={width < 768} />
  );

  return (
    <MDXProvider components={{ ...components, a: AnchorTagWithPopups }}>
      <div className="flex-1">
        <h1 className="mb-4">{note.title}</h1>
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
      </div>
      <div className="refs-box text-gray-600 mb-4">
        <hr className="mx-auto w-32" />
        {referenceBlock}
        <p className="text-sm m-0 mb-4">
          If you'd like to share an idea or your thoughts on something in this note free to send me
          a <a href="https://twitter.com/messages/compose?recipient_id=375132818">direct message</a>{' '}
          on Twitter or an <a href="mailto:kylerobertgill+notes@gmail.com">email</a> and we can
          chat.
        </p>
      </div>
    </MDXProvider>
  );
};

export default BrainNote;
