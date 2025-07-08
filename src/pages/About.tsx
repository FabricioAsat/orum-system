import { PageContainer } from "@components/PageContainer";

import logoIMG from "@assets/logo-orum.webp";

import { WhoUs } from "@/components/about/WhoUs";
import { WhyUs } from "@/components/about/WhyUs";
import { CallToAction } from "@/components/about/CallToAction";

export const About = () => {
  return (
    <PageContainer>
      <aside className="pt-16 lg:pt-0">
        <img
          src={logoIMG}
          alt="Logo Orum System"
          className="mx-auto max-w-4xl w-full"
        />
      </aside>

      <section id="about-us" className="px-4 py-16 mx-auto max-w-7xl">
        <WhoUs />
        <WhyUs />
        <CallToAction />
      </section>
    </PageContainer>
  );
};
