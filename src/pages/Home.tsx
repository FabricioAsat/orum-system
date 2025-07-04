import { PageContainer } from "@components/PageContainer";

import { Hero } from "@components/home/Hero";
import { ServicesHome } from "@/components/home/ServicesHome";
import { LogicFamily } from "@/components/home/LogicFamily";
import { Sponsors } from "@/components/home/Sponsors";

export const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <ServicesHome />
      <LogicFamily />
      <Sponsors />
    </PageContainer>
  );
};
