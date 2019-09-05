import styled from 'styled-components';

export const PostHeader = styled.header`
  padding: 1rem;
  padding-bottom: 0;

  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.2);
`;

export const PostTitle = styled.h2``;

export const PostMeta = styled.div`
  padding: 0.5rem 0;
  display: flex;

  color: #888;
  font-size: 0.8rem;

  > button {
    color: inherit;
    font-size: inherit;

    background: transparent;
    border: none;
    cursor: pointer;
  }

  > *:not(:first-child) {
    margin-left: 0.35rem;
  }

  > *:hover {
    color: #222;
  }
`;

export const PostBody = styled.div`
  min-height: 10rem;

  padding: 1rem;

  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.2);
`;

export const CommentSection = styled.div`
  max-height: 25rem;

  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
