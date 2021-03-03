import React, {useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

const App = (props) => {
  // const [currentUser, setCurrentUser] = useState(null);  

  useEffect(() => {    
    const { setCurrentUser } = props;
    //Firebase authentication
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });        
      } else {
        setCurrentUser(userAuth);
      }
    });

    //unsubscribe when unmounting
    return () => {
      auth.onAuthStateChanged(user => {
        setCurrentUser(null);
      })
    }
  }, [props])

  // console.log(currentUser)

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);