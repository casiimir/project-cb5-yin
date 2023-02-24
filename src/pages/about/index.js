import MainLayout from "@/layout/mainLayout/MainLayout";
import AboutDescription from "@/components/aboutDescription/AboutDescription";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Booking | Team di sviluppo</title>
        <meta name="description" content="Booking | Team di sviluppo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cf.bstatic.com/static/img/b25logo/favicon/ebc77706da3aae4aee7b05dadf182390f0d26d11.ico"
        />
      </Head>
      <MainLayout>
        <AboutDescription />
      </MainLayout>
    </>
  );
}

export default About;
