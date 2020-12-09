import Map from './components/Map'
import React from 'react';
import { ReportContextProvider } from './contexts/RepoContexts'
// import { db } from './config/firebase'
import Header from './components/Header'

class App extends React.Component {

  render(){
    return (
      
      <div className="App">
        <Header />
        <ReportContextProvider><Map /></ReportContextProvider>
      </div>
    )
  }
}
export default App