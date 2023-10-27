/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: 2px solid blue;
    border-radius: 5px;
    color: red;
  `;
  const titleStyle = css({
    color: "#fc9910"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <Button>エモーション</Button>
    </div>
  );
};

const Button = styled.button`
  background-color: pink;
`;
