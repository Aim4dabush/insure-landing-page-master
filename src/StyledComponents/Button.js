import styled from "styled-components";

const Button = styled.button`
  background: hsl(256, 26%, 20%);
  border: 1px solid hsl(0, 0%, 98%);
  color: hsl(0, 0%, 98%);
  font-weight: 700;
  padding: 1em 2em;
  text-decoration: none;

  &:hover {
    background: hsl(0, 0%, 98%);
    color: hsl(256, 26%, 20%);
  }
`;

export default Button;
