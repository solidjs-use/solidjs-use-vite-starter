import type { Component } from 'solid-js';

import logo from './logo.svg';
import { useMouse, useCounter } from 'solidjs-use'

const App: Component = () => {
  const { x, y } = useMouse()
  const { count, inc, dec } = useCounter()
  return (
    <div id='app'>
      <img src={logo} alt="logo" />
      <h1>Hello <a href='https://github.com/vuejs/vite' target='__blank'>Vite</a> and <a href='https://github.com/solidjs-use/solidjs-use' target='__blank'>solidjs-use</a></h1>

      <h3>Mouse: {x()} x {y()}</h3>
      <h3>
        Counter: {count()}{' '}
        <a onClick={() => inc()} style='margin-right: 10px'>+</a>
        <a onClick={() => dec()} style='margin-right: 10px'>-</a>
      </h3>

      <br /><br />
      <p><a href='https://github.com/solidjs-use/solidjs-use-vite-starter' target='__blank'>Source</a></p>
    </div>
  );
};

export default App;
