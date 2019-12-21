import React from 'react';
import HeadTag from './head-tag';
import ScriptTag from './script-tag';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';

export default class Home extends React.Component {

render() {
  return(
    <div>
        <HeadTag>
          <title>Guru Ahli : Home</title>
          <link rel="icon" href="/favicon.ico" />
        </HeadTag>
        <div className="wrapper">
          <Navbar />
          <SideBar />
          <Dashboard />
          <Footer />
        </div>
        <ScriptTag />
    </div>
    )
  }
}

