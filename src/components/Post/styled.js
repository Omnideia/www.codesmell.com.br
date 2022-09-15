/* eslint-disable no-undef */
import styled from 'styled-components';
import media from 'styled-media-query';

export const PostHeader = styled.header`
  color: var(--post-color);
  margin: auto;
  max-width: 88rem;
  padding: 5rem 5rem 0;

  ${media.lessThan('large')`
    padding: 4rem 1.6rem 0;
    max-width: 100%;
  `}
`;

export const PostTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1.6rem auto;

  ${media.lessThan('large')`
    font-size: 3.2rem;
    line-height: 4rem;
    padding: 0 1.6rem;
  `}
`;

export const PostDescription = styled.h2`
  font-size: 2.4rem;
  font-weight: 300;
  padding: 0 1.4rem;

  ${media.lessThan('large')`
    font-size: 2rem;
    line-height: 2.4rem;
    padding: 0 1.6rem;
  `}
`;

export const PostDate = styled.p`
  font-size: 1.6rem;
  font-weight: 100;
  padding: 0 1.6rem;

  ${media.lessThan('large')`
    padding: 0 1.6rem;
  `}
`;

export const MainContent = styled.section`
  margin: auto;
  max-width: 88rem;
  padding: 2rem 5rem;

  ${media.lessThan('large')`
    padding: 2.4rem 1.6rem;
    max-width: 100%;
  `}
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--post-color);
    font-size: 2rem;
    font-weight: 300;
    line-height: 3rem;
    letter-spacing: 0.1rem;
    padding: 0 1.4rem;

    ${media.lessThan('large')`
      padding: 0 1.6rem;
      word-break: break-word;
      margin-top: 0.8rem;
    `}
  }
  p {
    margin: 0 auto 2rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1.6rem;
  }
  ul {
    list-style: disc;
    margin-left: 2rem;
  }

  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.8rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
      border-radius: 8px;
    }
  }
  li::marker {
    padding-left: 2rem !important;
  }
  pre::-webkit-scrollbar {
    ${media.lessThan('large')`
      display: none !important;
    `}
  }
  img {
    display: block;
    max-width: 100%;
  }
  .gatsby-resp-image-wrapper {
    border-radius: 8px !important;
    overflow: hidden;
  }
  .gatsby-highlight {
    border-radius: 8px !important;
    overflow: hidden;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.lessThan('large')`
      padding: 0 1.6rem;
  `}
  }
  blockquote {
    color: var(--post-color);
    border-left: 0.7rem solid var(--hightlight-quote);
    /* padding: 1.2rem 2.4rem 0.1rem; */
    padding: 1.3rem 0.5rem 0.1rem;
    margin: 3.2rem auto;
    /* background-color: var(--background-blockquote); */
    background-color: rgba(0, 0, 0, 0.07);
    border-radius: 4px;
  }
  hr {
    border: none;
    width: 60%;
    margin: 1rem auto 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '...';
      color: var(--post-color);
      font-size: 3.2rem;
      letter-spacing: 0.6em;
      text-indent: 0.6em;
      font-style: italic;
    }
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.1rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 3.2rem;

    ${media.lessThan('large')`
      font-size: 2.8rem;
  `}
  }
  h2 {
    font-size: 3.2rem;

    ${media.lessThan('large')`
      font-size: 2.8rem !important;
  `}
  }
  h3 {
    font-size: 2.8rem;

    ${media.lessThan('large')`
      font-size: 2.4rem;
  `}
  }
  h4 {
    font-size: 1.6rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }

  mark {
    background-color: #767b91;
    padding: 0.3rem;
    border-radius: 4px;
    color: var(--post-color);
    font-family: var(--font-mark);
    font-weight: 400;
    font-style: italic;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    width: 100%;
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  /* Código */
  .gatsby-highlight {
    padding: 0 1.3rem 2rem;
    border-radius: 4px;

    ${media.lessThan('large')`
      padding: 1rem 1.6rem;
      max-width: 100%;
      border-radius: 4px;
    `}
  }

  .instagram-media {
    margin: 2rem auto !important;
  }

  a {
    border-bottom: 1px dashed var(--hightlight-quote);
    color: var(--hightlight-quote);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--post-color);
    }
    &:hover {
      opacity: 0.8;
    }
  }

  .styled__ShareTitle-eCovnU {
    margin-top: 6rem;
  }
`;
