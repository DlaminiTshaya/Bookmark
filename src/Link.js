import React, { Fragment } from 'react';
function Link(props) {
  const mapppedData = props.cards.map((card, i) => {
    return (
      <>
      <div key={i} className="linkCard" >
        <img src="" />
        <div>
          <h2 className="linkCardLink">
            <a href="{card.linkHref}">{card.linkHref}</a>
          </h2>
          
          
        </div>
       
      </div>
      <div className="m">
      <div>
      <h4>Song:<span style={{marginLeft:20}}></span>{card.linkName}</h4>
      </div>
      <div>
      <h4>Artist:<span style={{marginLeft:20}}></span>{card.linkArtist}</h4>
      </div>
      <div>
      <h4>Year:<span style={{marginLeft:20}}></span>{card.linkYear}</h4>
      </div>
      </div>
     
      </>
    );
  });
  return <Fragment>{mapppedData}</Fragment>;
}
export default Link;