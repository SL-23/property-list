import React, { FC } from 'react';
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./appRoutes";
import { Header, Footer} from './common/components';

interface TemplateProps {
  children: React.ReactNode
}

const Template : FC<TemplateProps> = (props: TemplateProps) => {
  return (
    <Container 
      disableGutters 
      maxWidth={false} 
    >
      <Header/>
      <main>{props.children}</main>
      <Footer/>
    </Container>
  )
}

const App = () => {
  //console.log(appRoutes);
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
