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
    Property,
    SideDrawerModal,
} from './';
function App({ setLoggedInUser }) {
    useEffect(() => {
        setLoggedInUser();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="App">
            <Navigation />
            <SideDrawerModal />
            <div className="view">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <PrivateRoute path="/property" exact component={Listing} />
                    />
                    <PrivateRoute
                        path="/property/new"
                        exact
                        component={AddListing}
                    />
                    <PrivateRoute
                        path="/property/:id"
                        component={Property}
                        exact
                    />
                    {/* will have a separate router underneath of it */}
                    <PrivateRoute
                        path="/property/:id/edit"
                        component={UpdateListing}
                    />
                    <Redirect to="/login" />
                </Switch>
            </div>
        </div>
    );
}

export default connect(null, { setLoggedInUser })(App);
