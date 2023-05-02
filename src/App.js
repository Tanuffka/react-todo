import './App.css';

import Footer from './components/Footer';
import AppBar from './components/AppBar';
import Content from './components/Content';

export default function App() {
  return (
    <div className="app">
      <AppBar />
      <Content />
      <Footer />
    </div>
  );
}
