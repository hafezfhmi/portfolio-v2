import Head from "next/head";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";
import Contact from "@/components/ui/Contact";

const Index = () => {
  return (
    <>
      <Head>
        <title>Hafez Fahmi</title>
        <meta
          name="description"
          content="Hafez Fahmi is a Full-Stack Developer specializing in JavaScript who have a passion for delivering high-quality, scalable web applications that solve complex problems and provide exceptional user experiences."
        />
        <link rel="canonical" href="https://www.hafezfhmi.com" />
        <meta property="og:title" content="Hafez Fahmi Portfolio Website" />
        <meta
          property="og:description"
          content="Discover the web development portfolio of Hafez Fahmi, a Full-Stack Developer specializing in JavaScript. Contact Hafez today to learn more."
        />
        <meta
          property="og:image"
          content="https://www.hafezfhmi.com/images/meta-og-img.png"
        />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Index;
