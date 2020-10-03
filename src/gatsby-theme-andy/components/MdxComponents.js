import React from 'react';
import Tippy from '@tippyjs/react';
import { LinkToStacked } from 'react-stacked-pages-hook';
import { Link } from 'gatsby';

// Animation styles are imported in `src/styles.css`

const innerLinkStyles = `text-blue-600 px-1 -mx-1 rounded hover:bg-blue-100 focus:bg-blue-100`;

const AnchorTag = ({ href, popups = {}, noPopups = false, ...restProps }) => {
  if (!href) href = restProps.to;
  if (!href.match(/^http/))
    return noPopups ? (
      <Link {...restProps} to={href} className={innerLinkStyles} />
    ) : (
      <Tippy
        arrow={true}
        content={popups[href.replace(/^\//, '')]}
        placement="right"
        animation="shift-away"
      >
        <LinkToStacked {...restProps} to={href} className={innerLinkStyles} />
      </Tippy>
    );
  return noPopups || restProps.children === href ? (
    <a {...restProps} href={href} />
  ) : (
    <Tippy
      placement="top"
      animation="shift-away"
      maxWidth="none"
      content={
        <div className="py-1 px-2 bg-white rounded text-sm text-blue-600 shadow">{href}</div>
      }
    >
      <a className="" {...restProps} href={href} />
    </Tippy>
  );
};

const NoteTag = ({ children, color }) => (
  <div
    className={`bg-${color}-200 text-${color}-800 py-1 px-2 mb-2 mr-2 text-xs font-bold rounded inline-block`}
  >
    {children}
  </div>
);

const Scripture = ({ title, link, children }) => {
  return (
    <div
      className="border-solid border bg-blue-100 bg-opacity-50 p-4 -mx-4 my-4 font-serif rounded-md"
      sx={{
        border: (theme) => `1px solid ${theme.colors.border}`,
        margin: `15px auto 50px`,
        width: `100%`,
        maxWidth: 744,
        p: `4`,
        color: `articleText`,
        backgroundColor: `scriptureBg`,
        fontSize: 18,
        fontFamily: `Palatino`,
        lineHeight: 1.5,
        '& > *+*': {
          mb: 2,
        },
      }}
    >
      <div
        className="font-bold text-blue-600 mb-1"
        sx={{
          fontSize: `2`,
          fontWeight: `700`,
          mb: `1`,
          fontStyle: `italic`,
          color: `grey`,
        }}
      >
        <a className="no-underline" href={link && link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
      {children}
    </div>
  );
};

const ScriptureBreak = () => {
  return <div sx={{ my: 10 }} />;
};

export default {
  a: AnchorTag,
  NoteTag,
  Scripture,
  br: ScriptureBreak,
};
