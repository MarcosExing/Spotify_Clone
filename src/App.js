import './reset.css';
import './global.css';
import './fonts.css';
import './vars.css';
import './App.css';
import './media-queries.css';
import 'https://kit.fontawesome.com/8da7e8955d.js';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <SideBar />

      <div className='main-container'>
        <Header />
        <Content />
      </div>

      <Footer/>
    </div>
  );
}

export default App;
