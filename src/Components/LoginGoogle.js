import GoogleLogin from 'react-google-login';
import { Fragment } from 'react';

function LoginGoogle() {

  const respuestaGoogle=(respuesta)=>{
    console.log(respuesta)}
  return (
    <Fragment>

    <div className="App">
    <br></br>
    <GoogleLogin
    clientId="759622469218-2u4o56j05amgvu3f05c32ku657jnvffv.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={respuestaGoogle}
    onFailure={respuestaGoogle}
    cookiePolicy={'single_host_origin'}/>,
    </div>
   
    </Fragment>
  );
}

export default LoginGoogle;