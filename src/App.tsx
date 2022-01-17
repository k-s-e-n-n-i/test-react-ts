import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { basename } from './modules/functions/functions';

import Layout from './components/layout/layout';
import StartPage from './pages/start-page/start-page';
import LandingPage from './pages/landing-page/landing-page';

class App extends Component<{}> {
  render() {
    const startPage = <StartPage />;
    const landingPage = <LandingPage />;

    return (
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<Layout header={0} content={startPage} footer={0} />} />
          <Route path="/landing-page.html" element={<Layout content={landingPage} />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
