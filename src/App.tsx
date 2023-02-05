import React, { FC } from 'react';
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./appRoutes";
import { Header, Footer } from './common/components';
import { useReponsiveValue } from './hooks/useResponsiveValue';

interface TemplateProps {
  children: React.ReactNode
}

const Template: FC<TemplateProps> = (props: TemplateProps) => {
  return (
    <Container
      disableGutters
      maxWidth={false}
    >
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Container>
  )
}

const App = () => {
  const bp = useReponsiveValue()
  console.log(bp)
  return (
    <>
      <Routes>
        {
          appRoutes.map((r, i) => (
            <Route
              key={i}
              path={r.path}
              element={<Template> {r.element()} </Template>}
            />
          ))
        }
      </Routes>
    </>
  );
}

export default App;
