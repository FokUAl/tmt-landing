import Nav from './components/nav';
import AboutFirst from './pages/aboutFirst'
import AboutHero from './pages/aboutHero'
import AboutHeroTwo from './pages/aboutHeroTwo';
import AboutEnd from './pages/aboutEnd'
import Choose from './pages/choose'
import LinksPage from './pages/linksPage'
import './App.scss';

function App() {
  return (
    <main className="bg-[url('static/images/bg.webp')] bg-no-repeat bg-cover bg-center text-primary w-full">
        <Nav />
        <AboutFirst />
        <AboutHero />
        <AboutHeroTwo />
        <AboutEnd />
        <Choose />
        <LinksPage />
    </main>
  );
}

export default App;
