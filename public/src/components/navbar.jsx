import React from 'react';
import PhotoForm from './photoform.jsx';

/* ------------------------------
Render Navbar to top of page:
  -uses bootstrap navbar
  -calls on PhotoForm

_________________________________
PhotoForm receives:
  - addPhoto      as  addPhoto
  - currentUser   as  currentUser
  - selectAlbum   as  selectAlbum
  - getAlbum      as  getAlbum
_________________________________


-------------------------------*/

const Navbar = ({addPhoto, currentUser, selectAlbum, getAlbum}) => {
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
          <a className="navbar-brand" href="/"><img src="../images/Chobi.png" /></a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav navbar-right">

            <li className="dropdown">
              <a className="dropdown-toggle" href="#" data-toggle="dropdown">Upload<span className="caret"></span></a>
              <div className="dropdown-menu">
                <PhotoForm
                  addPhoto={addPhoto}
                  currentUser={currentUser}
                  selectAlbum={selectAlbum}
                  getAlbum={getAlbum}
                />
              </div>
            </li>

            <li>
              <a href="/auth/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
