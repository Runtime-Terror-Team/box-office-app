import React from 'react';
import Nav from './Nav';
import Title from './Title';

function MainPageLayout({ children }) {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are You Looking For Series Or An Actor?"
      />
      <Nav />
      {children}
    </div>
  );
}

export default MainPageLayout;
