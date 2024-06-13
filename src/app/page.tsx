'use client';

import AppPresentation from "./components/AppPresentation/AppPresentation.client";
import Header from "./components/Header/Header.client";
import { LandingPageWrapper } from "./page.styles";

export default function Home() {
  return (
    <LandingPageWrapper>
      <Header />
      <AppPresentation />
    </LandingPageWrapper>
  );
}
