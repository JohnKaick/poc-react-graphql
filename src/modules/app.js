import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo'
import environment from '../common/environment'

import MenuView from '../modules/menu'
import ProductView from '../views/product'
import DeliveryView from '../views/delivery'
import PanelView from '../views/panel'

class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={environment}>
                <BrowserRouter>
                    <MenuView />
                    <Switch>
                        <Route path='/' component={PanelView} exact />
                        <Route path='/entrega' component={DeliveryView} exact />
                        <Route path='/produto' component={ProductView} exact />
                        <Redirect path='/' />
                    </Switch>
                </BrowserRouter>
            </ApolloProvider>
        )
    }
}

export default App