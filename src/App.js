import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>my blog</h1>
        <div id="page-body">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/articles/:articleId' element={<Article />} />
            <Route path='/articles' element={<ArticleList />} />
            <Route path='/notfound' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
