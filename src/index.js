import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './carousel'
import Squares from './Squares'
import Logo1 from './images/1.svg'
import Logo2 from './images/2.svg'
import Logo3 from './images/3.svg'
import Photo1 from './images/cooking-cuisine-delicious-958545.jpg'
import Photo2 from './images/thai-chicken.jpg'
import Photo3 from './images/thai-cashew-chicken-recipe.jpg'
import FPO from './images/FPO.svg'

// Main App
class App extends React.Component {

  render () {
    return (
      <div style={{height: '100vh'}}>
        <Carousel loop auto className="custom-class">
          <Squares numIcon={Logo1} content="Gradients" content2="Start, end, angle" src={Photo1} icon={FPO}/>
          <Squares numIcon={Logo2} content="Presets" content2="Manage presets" src={Photo2} icon={FPO}/>
          <Squares numIcon={Logo3} content="Colors" content2="Pick any color" src={Photo3} icon={FPO}/>
        </Carousel>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
