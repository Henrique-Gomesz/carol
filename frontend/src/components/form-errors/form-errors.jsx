import { Container, Error } from "./form-errors.styles";

export const FormErrors = ({ errors }) => {
  return (
    <Container>
      {Object.keys(errors).map((key) => {
        return <Error key={key}>{errors[key]}</Error>;
      })}
    </Container>
  );
};
