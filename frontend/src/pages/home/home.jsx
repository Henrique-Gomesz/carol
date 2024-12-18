import { FormSwitch } from "../../components/form-toggle/form-toggle";
import { MainForm } from "../../components/main-form/main-form";
import { Results } from "../../components/results/results";
import { Container, Title } from "./home.styles";

import { MedicalDisclaimer } from "../../components/medical-disclaimer/medical-disclaimer";
import { Logo } from "../../components/logo/logo";

export const HomePage = () => {
  return (
    <Container>
      <Logo />
      <Title>CLASSIFICAÇÃO OBJETIVA EM SAÚDE</Title>
      <FormSwitch
        leftLabel="ATENÇÃO BÁSICA"
        rightLabel="HOSPITALAR"
        onToggle={() => {}}
      />
      <MainForm />
      <Results />
      <MedicalDisclaimer />
    </Container>
  );
};
