import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Chat from './Chat/Chat'
import Check from './Check/Check'
import Confirm from './Confirm/Confirm'
import Delivery from './Delivery/Delivery'
import Error from './Error'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'

const Pages = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/check">
        <Check />
      </Route>
      <Route path="/delivery/:id?">
        <Delivery />
      </Route>
      <Route path="/chat/:id?">
        <Chat />
      </Route>
      <Route path="/confirm/:id?">
        <Confirm />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Pages
