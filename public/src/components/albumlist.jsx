import React from 'react';
import Album from './album.jsx';

/* ------------------------------
Render the list of albums from the album state in App.jsx
  -calls Album.jsx for each album
-------------------------------*/

const AlbumList = ({albums, selectAlbum}) => {
  const albumNode = albums.map((album, i) => {
    return (<Album album={album} selectAlbum={selectAlbum} key={i} />);
  });
  return (<div>{albumNode}</div>);
};

export default AlbumList;
