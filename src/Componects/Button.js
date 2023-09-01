import { styled } from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? "#f33bea" : "none"};
  color: ${(props) => (props.variant === "primary" ? "white" : "#f33bea")};
  border: 1px solid #f33bea;
  width: 100%;
  font-family: font-mono;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  padding: ${(props) =>
    props.variant === "details" ? "0.4em 1em" : "0.7em 3em"};
  border-radius: 5px;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background: rgb(243, 59, 234);
    background: linear-gradient(
      127deg,
      rgba(243, 59, 234, 1) 0%,
      rgba(71, 9, 121, 1) 63%,
      rgba(42, 181, 220, 1) 100%
    );
    border: 1px solid transparent;
    color: white;
  }
`;
