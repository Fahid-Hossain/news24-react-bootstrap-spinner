import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=5e78fe8166a74e6ea844548b6ddef888')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div>
      <h1>TodaysNews:{news.length}</h1>
      <Row xs={1} md={3} className="g-4">
        {
          news.map(nw => <News key={nw.author} news={nw}>


          </News>)
        }
      </Row>

    </div>
  );
}

export default App;
