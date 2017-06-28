import React from 'react';
// import Bootstrap from 'bootstrap';
import PhotoForm from './photoform.jsx';

const Navbar = ({addPhoto}) => {
  return (

<nav className="navbar navbar-default navbar-fixed-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">Chobi</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

      <ul className="nav navbar-nav navbar-right">

        <li className="dropdown">
          <a className="dropdown-toggle" href="#" data-toggle="dropdown">Upload <span className="caret"></span></a>
          <div className="dropdown-menu">
            <PhotoForm addPhoto={addPhoto}/>
          </div>
        </li>

        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  </div>
</nav>





  );
};

export default Navbar;
// <PhotoForm addPhoto={addPhoto}/>

/*

<form className="form-horizontal"  method="post">
            <input id="sp_uname" className="form-control login" type="text" name="sp_uname" placeholder="Username.." />
            <input id="sp_pass" className="form-control login" type="password" name="sp_pass" placeholder="Password.."/>
            <input className="btn btn-primary" type="submit" name="submit" value="login" />
          </form>


<li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>

*/
