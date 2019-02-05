import React from 'react';
import Breakpoint from 'react-socks';

class Squares extends React.Component {

  render (props) {
    return (
      <div>
        <Breakpoint medium down>
          <div style={{height: '50vh'}}>
            <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <img style={{width: '2.5em'}} src={this.props.numIcon}/>
              <h1 style={{color: 'black', fontSize: '3em', fontFamily: 'Roboto', marginTop: '0.4em', marginBottom: '0.4em', width: '80%', textAlign: 'center'}}>{this.props.content}</h1>
              <h2 style={{color: 'grey', fontWeight: '400', fontFamily: 'Roboto', margin: 0, width: '80%', textAlign: 'center'}}>{this.props.content2}</h2>
            </div>
            <div style={{overflowX: 'hidden', overflowY: 'hidden', height: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <img src={this.props.icon} style={{position: 'absolute', top: '72%'}}/>
              <img src={this.props.src} style={{height: '100%'}}/>
            </div>
          </div>
        </Breakpoint>
        <Breakpoint large up>
          <div style={{height: '50vh'}}>
        <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <img style={{width: '2.5em'}} src={this.props.numIcon}/>
          <h1 style={{color: 'orange', fontSize: '3em', fontFamily: 'Roboto', marginTop: '0.4em', marginBottom: '0.4em', width: '80%', textAlign: 'center'}}>{this.props.content}</h1>
          <h2 style={{color: 'grey', fontWeight: '400', fontFamily: 'Roboto', margin: 0, width: '80%', textAlign: 'center'}}>{this.props.content2}</h2>
        </div>
          <div style={{overflowX: 'hidden', overflowY: 'hidden', height: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <img src={this.props.icon} style={{position: 'absolute', top: '72%'}}/>
            <img src={this.props.src} style={{ height: 'auto', width: '100vw'}}/>
          </div>
          </div>
        </Breakpoint>
      </div>
    )
  }

}

export default Squares;