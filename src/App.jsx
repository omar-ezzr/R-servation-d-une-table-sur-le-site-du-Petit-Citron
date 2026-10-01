import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specials />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
