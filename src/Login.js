import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import TwitterIcon from '@material-ui/icons/Twitter';
import TwitterImage from './static/twitter-2.png'

function Login() {

  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(result => {

      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    })
    .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__left">
        <img src={TwitterImage} /> 
      </div>
     <div className="login__right">
      <TwitterIcon className="login__twitterIcon" />
      <h1>Lo que esta pasando ahora</h1>
      <Button className="button_signIn" type="submit" onClick={signIn}>
        Iniciar sesión
      </Button>
     </div>
    </div>
  );
}

export default Login;
