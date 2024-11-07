import { Container } from "./styles";

type ButtonProps = {
  text: string;
};

export function Button({text}: ButtonProps) {

  return(
    <Container>
      {text}
    </Container>
  );
};