import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import "normalize.css"
import "./assets/css/index.less"
import store from "./store"
import theme from './assets/theme'


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Suspense fallback="loading~~">
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  </Suspense>
)
