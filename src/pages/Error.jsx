import styled from 'styled-components';

const ErrorContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const ErrorMessage = styled.h1`
  color: red;
  font-size: 24px;
`;

const ErrorDescription = styled.p`
  font-size: 18px;
`;

const BackLink = styled.a`
  color: blue;
  text-decoration: underline;
`;

function Error() {
  return (
    <ErrorContainer>
      <ErrorMessage>Oops! Page not found.</ErrorMessage>
      <ErrorDescription>The page you are looking for does not exist.</ErrorDescription>
      <BackLink href="/">Go back to home</BackLink>
    </ErrorContainer>
  );
}

export default Error;
