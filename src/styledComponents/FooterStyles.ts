import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--nav-background-color);
  color: var(--nav-text-color);
  text-align: center;
  padding: 2%;
  width: 100%;
  height: 8%;
  font-size: 1.2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: hidden;
  overflow-x: hidden;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;
  }

  p {
    margin: 0;
    margin-right: 10px; /* Adjust the right margin to create space */
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const StyledIcon = styled.a`
  display: flex;
  align-items: center;

  svg {
    color: var(--border-color);
    transition: color 0.3s;

    &:hover {
      color: blue;
    }
  }
`;
