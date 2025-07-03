import { PageContainer } from "@components/PageContainer";

import { Hero } from "@components/home/Hero";
import { ServicesHome } from "@/components/home/ServicesHome";

export const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <ServicesHome />
    </PageContainer>
  );
};
