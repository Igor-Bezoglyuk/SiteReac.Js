import logo from './logo.svg';
import './App.css';

const App =()=> {
  return (
    <div>
    <Header/>
    <Content/>
    <Footer/>
    </div>
  );
}

const Header =()=> {
  return (
    <div className="header">
    </div>
  );
}

const Content =()=> {
  return (
    <div className="content">
    <div className="content-blocks"></div>
    <div className="content-blocks"></div>
    </div>
  );
}

const Footer =()=> {
  return (
    <div className="footer">
    </div>
  );
}
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
        //  Learn React
      //  </a>
    //  </header>
    //</div>
//  );
//}

export default App;
