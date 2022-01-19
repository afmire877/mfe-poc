import singleSpaReact from 'single-spa-react'
import React from 'react'
import ReactDOM from 'react-dom'
// @ts-ignore
import App from './App.tsx'

const lifecycles = singleSpaReact({
  React, 
  ReactDOM, 
  rootComponent: App,
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
