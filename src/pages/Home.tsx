import Layout from '../Layout';
import Navigation from '../components/home/Navigation';
import Hero from '../components/home/Hero';
import Process from '../components/home/Process';
import StyleMenu from '../components/home/StyleMenu';
import Investment from '../components/home/Investment';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Process />
      <StyleMenu />
      <Investment />
      <Contact />
    </Layout>
  );
}