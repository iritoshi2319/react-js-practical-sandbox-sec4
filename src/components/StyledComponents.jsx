import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <Container>
        <Title>- StyledComponents -</Title>
        <Button>スタイルドコンポーネンツ</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  border: 2px solid blue;
  border-radius: 5px;
  color: red;
`;

const Title = styled.p`
  color: purple;
`;

const Button = styled.button`
  background-color: pink;
`;
