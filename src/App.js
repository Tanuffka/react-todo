import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
