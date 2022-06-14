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

// import styled from 'styled-components'
// import HeaderIllustration from '../../assets/illustration-working.svg'


// export const ShowcaseImage = styled.div`
//   background-image: url(${(props) => props.image.src});
//   height: 20rem;
//   width: 40rem;
// `;


// export const Container = styled.div`
//   width: 100%;
//   min-height: 90vh;
//   padding: 0 10rem;
//   position: relative;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   flex-direction: column;

//   background: url(${HeaderIllustration}) no-repeat;
//   background-position: right 50%;
//   background-size: 50% auto;

//   button {
//     background-color: ${props => props.theme.colors.primary.cyan};
//     border: none;
//     border-radius: 30px;
//     width: 150px;
//     padding: 16px;

//     color: ${props => props.theme.colors.primary.white};
//     font-weight: 700;
//     font-size: 1rem;
//   }

//   @media (max-width: 425px) {
//     min-height: 110vh;
//     padding: 100px 1.5rem 20vh;
//     background-position: top left;
//     background-size: auto 50%;
//     background-origin: content-box;
//     justify-content: flex-end;

//     button {
//       margin: 0 auto;
//     }
//   }
// `

// export const Info = styled.div`
//   width: 49%;
//   margin-bottom: 16px;

//   * {
//     margin: 0.5rem 0;
//   }

//   h1 {
//     font-size: 4rem;
//     font-weight: 900;
//     line-height: 5rem;
//     letter-spacing: -0.05em;
//     color: ${props => props.theme.colors.neutral.darkBlue};
//   }

//   @media (max-width: 425px) {
//     width: 100%;
//     text-align: center;

//     h1 {
//       font-size: 3rem;
//       line-height: 3.5rem;
//     }

//     p {
//       font-size: 1rem;
//     }
//   }
// `
