import React from 'react';
import Photo from './photo.jsx';

const Album = ({album, selectAlbum}) => { // edited this (wip)
  /*const photos = album.photos.map(photo, i) => {
    return (<div className="col-md-3"><Photo photo={photo} key={album.name + i}/></div>)
  }*/

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h3 onClick={() => { selectAlbum(album); }}>{album.albumName}</h3> {/* << make dynamic*/}
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Photo photo={album.photos[0]}/>
        </div>
        <div className="col-md-3">
          <Photo photo={album.photos[1]}/>
        </div>
        <div className="col-md-3">
          <Photo photo={album.photos[2]}/>
        </div>
        <div className="col-md-3">
          <Photo photo={album.photos[3]}/>
        </div>
      </div>
    </div>
  );
};

export default Album;
