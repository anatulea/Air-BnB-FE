import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoggedInUser } from '../redux/actionCreators';
import {
    AddListing,
    PrivateRoute,
    UpdateListing,
    Login,
    Register,
    Listing,
    Navigation,
    PropertyCard,
} from './';

function App({ setLoggedInUser }) {
    useEffect(() => {
        setLoggedInUser();
    }, []);
    return (
        <div className="App">
            <Navigation />
            <Switch>
                <Route path="/property" exact component={Listing} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                {/* will have a separate router underneath of it */}
                <Route path="/property" exact>
                    <div>Properties</div>
                </Route>
                <PrivateRoute
                    path="/property/new"
                    exact
                    component={AddListing}
                />
                <Route
                    path="/property/:id"
                    // component={PropertyCard}
                    exact>
                    <div>Property</div>
                </Route>
                <PrivateRoute
                    path="/property/:id/edit"
                    component={UpdateListing}
                />
                <Route render={() => <Redirect to="/login" />} />
            </Switch>
        </div>
    );
}

export default connect(null, { setLoggedInUser })(App);
