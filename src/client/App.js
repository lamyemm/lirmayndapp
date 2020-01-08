// Dependencies
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Style
import Layout from './components/Layout'
import NavBar from './components/navbar'

// Components
const Welcome = lazy(() => import('./routes/welcome'))
const Community = lazy(() => import('./routes/community'))
const MessagesList = lazy(() => import('./routes/messages-list'))
const Profile = lazy(() => import('./routes/profile'))
const Chat = lazy(() => import('./routes/chat'))
const NoMatch = lazy(() => import('./components/no-match'))

export default () => {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/messageslist" component={MessagesList} />
              <Route path="/community" component={Community} />
              <Route path="/profile" component={Profile} />
              <Route path="/chat/:handle" component={Chat} />
              <Route component={NoMatch} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </React.Fragment>
  )
}
