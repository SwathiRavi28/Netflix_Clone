import './Browse.css';
import Row from '../components/Row.js';
import Banner from '../components/Banner.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import requests from '../extras/requests.js';


function Series() {
  return (
    <div className="browse">
      <Nav fetchUrl={requests.fetchTrending} />
      <Banner />
      <div className="rows">
      
      <Row title="Series" fetchUrl={requests.fetchSeries} isLargeRow  />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow  />
        
        
      </div>
      <Footer />
    </div>
  );
}

export default Series;