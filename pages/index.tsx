import Band from '@/components/Band';
import Banner from '@/components/Banner';
import Download from '@/components/Download';
import FirstFlex from '@/components/FirstFlex';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Picture from '@/components/Picture';
import Reviews from '@/components/Reviews';
import SecondBand from '@/components/SecondBand';
import SecondFlex from '@/components/SecondFlex';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Header />
      <Banner />
      <FirstFlex />
      <SecondFlex />
      <Download />
      <Reviews />
      <Band />
      <Picture />
      <SecondBand />
      <Footer />
    </main>
  );
}
