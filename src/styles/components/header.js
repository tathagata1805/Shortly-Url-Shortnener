import styled from 'styled-components'


export const ShowcaseSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3rem;
`;
export const ShowcaseHeading = styled.div`
  max-width: 440px;
  margin-bottom: 1rem;
  font-size: 3rem;
  line-height: 4rem;
  font-weight: bold;
  color: black;
  margin-top: 10rem;
  margin-left: 10rem;
  background-repeat: no-repeat;
`;

export const ShowcaseText = styled.div`
  max-width: 600px;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: gray;
  line-height: 2rem;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-left: 10rem;
`;

export const ShowcaseLeft = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 10rem;
  align-items: center;
  justify-content: space-between;
`;
export const ShowcaseRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15rem;
`;
export const ShowcaseImage = styled.div`
  background-image: url(${(props) => props.image.src});
  height: 20rem;
  width: 40rem;
`;

export const ShowcaseBtn = styled.button`
  text-decoration: none;
  padding: 8px 16px;
  border: none;
  outline: none;
  background-color: green;
  color: white;
  border-radius: 10rem;
  margin-left: 10rem;
  margin-bottom: 5rem;
  font-size: 1.5rem;
`;