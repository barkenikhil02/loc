import Map from './components/Map'
import React from 'react';
import { RepoContext, ReportContextProvider } from './contexts/RepoContexts'
// import { db } from './config/firebase'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <ReportContextProvider><Map /></ReportContextProvider>
      </div>
    )
  }
}
export default App