import './App.css';
import React from 'react';
import { Header } from './lib/Header/Header';
import { Footer } from './lib/Footer/Footer';
import { Navbar } from './Component/Navbar';
import { BlankBox } from './Component/BlankBox';
import { Card } from './Component/Card';
import { CardHeaderName } from './Component/CardHeaderName';



export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      blankBox: [
        { position: '1' },
        { position: '2' },
        { position: '3' },
        { position: '4' },
        { position: '5' },

      ],
      cards: [
        { title: 'Website Design', cardBody: 'Progravida nibh vel velit auctor alinean, lorem quis bibendum' },
        { title: 'On Demand Devs', cardBody: 'Progravida nibh vel velit auctor alinean, lorem quis bibendum' },
        { title: 'Webhosting', cardBody: 'Progravida nibh vel velit auctor alinean, lorem quis bibendum' },
      ],
      blankBoxCard: [
        { position: '1' },
        { position: '2' },
        { position: '3' }
      ]
    }
  }
  render() {
    return <>
      <div className="page-container">
        <div className='content-wrap'>
          <Header></Header>
          <Navbar></Navbar>


          <div className='main-content'>
            <CardHeaderName name='Lorem ipsum dolor' headerName='Products'></CardHeaderName>
            <div className='blankBox-card'>
              {this.state.blankBox.map(() => <BlankBox></BlankBox>)}
            </div>

            <CardHeaderName name='Lorem ipsum dolor' headerName='Services'></CardHeaderName>
            <div className='blankBox-card'>
              {this.state.cards.map((e) => <Card title={e.title} cardBody={e.cardBody}></Card>)}
            </div>

            <CardHeaderName name='Lorem ipsum dolor' headerName='Portfolio/Case Studies'></CardHeaderName>
            <div className='blankBox-card'>
              {this.state.blankBoxCard.map(() => <BlankBox></BlankBox>)}
            </div>

            <CardHeaderName name='Lorem ipsum dolor' headerName='Developers On Demand'></CardHeaderName>
            <div className='blankBox-card'>
              {this.state.blankBoxCard.map(() => <BlankBox></BlankBox>)}
            </div>
          </div>
        </div>
        <Footer></Footer>

      </div>

    </>

  }


}