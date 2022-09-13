import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostItemLink = styled(AniLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: var(--color-profile-primary);
  text-decoration: none;
  
  max-width: 130rem;
  
  margin: 0 auto;
  
  transition: color 0.4s;
  cursor: default;
`;

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  border: 1px solid var(--color-line-postitem);
  
  padding: 2rem 3rem;
  margin: 1.6rem 2.4rem 0.8rem;
  
  width: 40rem;

  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  
  transition: box-shadow 0.4s, color 0.4s;

  &:hover {
    box-shadow: 0 12px 14px rgba(0, 0, 0, 0.2);
    color: var(--color-link-hover) !important;
    cursor: pointer;
  }

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2.4rem 1.6rem;
    border: 1px solid #4E516680;
  `};
`;

export const PostItemTag = styled.div`
  display: flex;

  /* align-items: flex-end; */
  
  background: ${props => (props.background ? props.background : '#7159c1')};
  color: #fff;
  border-radius: 20px;
  
  font-size: 2rem;
  font-weight: 700;
  
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
  
  border-radius: 8px;
  font-size: 1.6rem;
  min-height: auto;
  min-width: auto;
  padding: .8rem 1rem;
  margin-bottom: 1rem;


  ${media.lessThan('large')`
  border-radius: 8px;
  font-size: 1.6rem;
  min-height: auto;
  min-width: auto;
    padding: .8rem 1rem;
    margin-bottom: 1rem;
  `}
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
  `}
`;

export const PostItemDate = styled.time`
  font-size: 1.2rem;

  /* color: var(--color-profile-secundary); */
`;

export const PostItemTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0.6rem 0 1rem;
`;

export const PostItemDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.2;

  /* color: var(--color-profile-secundary); */
`;
