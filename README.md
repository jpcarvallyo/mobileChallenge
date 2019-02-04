# re-carousel [![npm-version][npm-badge]][npm-link] [![size][size-src]][size-link]

*Note: James Carvallyo used this original repository (created by Amio: http://github.com/amio) to riff off of (in addition to removing various 
components and 
functionality to achieve functionality outlined in the code challenge). 

James is the original author of the "Square" component used 
in this repository. James also created the SVGs used in this project. Images were sourced from google.

Also note that the white circle serves as the FPO (for placement only) icon. You could replace the FPO with another 
icon of your choice, such as Logo1, Logo2, or Logo3 found in this repo).

Please also note that this is optimized for mobile only. James understands that the next step would be to ensure that the layout looks great on screens larger than the phone.

Below is the original author's demo and documentation. Here are his instructions below.

Minimal carousel component for React.

demo: https://amio.github.io/re-carousel/

### Usage

`import Carousel from 're-carousel'`

then:

```jsx
<Carousel auto>
  <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
  <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
  <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
</Carousel>
```

### Attributes

All attributes are optional.

- `axis` {Enum} `'x'` or `'y'` (`'x'` by default)
- `loop` {Boolean} `true` or `false` (`false` by default) toggle loop mode.
- `auto` {Boolean} `true` or `false` (`false` by default) toggle auto sliding.
- `interval` {Number} (`4000`ms by default) interval for auto sliding.
- `duration` {Number} (`300`ms by default) duration for animation.
- `onTransitionEnd` {Function({ prev: HTMLElement, current: HTMLElement, next: HTMLElement})} on frames transition end callback.
- `widgets` {Array of ReactClass} Indicator and switcher could be various,
  so it's not builtin. Here's some example custom widgets
  ([dots indicator](src/indicator-dots.js),
  [prev/next buttons](src/buttons.js), [keyboard navigation](src/keyboard-navigator)):

  ```javascript
  import Carousel from 're-carousel'
  import IndicatorDots from './indicator-dots'
  import Buttons from './buttons'

  export default function carousel () {
    return <Carousel loop auto widgets={[IndicatorDots, Buttons]}>
      <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
      <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
      <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
    </Carousel>
  }
  ```
- `frames` {Array of ReactElement} If you want to create frames programmatically,
  use this attribute:

  ```javascript
  import Carousel from 're-carousel'

  export default function carousel (props) {
    const frames = props.frameArray.map((frame, i) => {
      return <div>Frame {i}</div>
    })
    return <Carousel auto frames={frames}>
      <span>These children element will be appended to Carousel,</span>
      <span>as normal element other than "frame".</span>
    </Carousel>
  }
  ```
- `className` {String} Custom class name.

### Contributes

```bash
npm run start # start local dev server
npm run build # build lib
npm run test  # run tests
```

## License

[MIT][mit] © [jpcarvallyo][author]
[mit]: http://opensource.org/licenses/MIT
[author]: jpcarvallyo
