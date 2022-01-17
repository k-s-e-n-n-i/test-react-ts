import React from 'react';
import './start-page.scss';
import Link from '../../components/link/link';

import { basename } from '../../modules/functions/functions';

class StartPage extends React.Component {
  render() {
    return (
      <div>
        <div className="start-page">
          <h2>Pages Toxin:</h2>
          <div className="start-page__links">
            <Link classBlock="start-page__link" text="landing page" url={`/landing-page.html`} />
            <Link classBlock="start-page__link" text="registration" />
            <Link classBlock="start-page__link" text="sing in" />
            <Link classBlock="start-page__link" text="search room" />
          </div>
        </div>
      </div>
    );
  }
}

export default StartPage;
