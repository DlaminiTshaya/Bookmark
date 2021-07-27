import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Link from './Link';
const App = () => {
  const [book, setBook] = useState([
    {
      linkName: 'Big Zulu Imali ening',
      linkHref: 'https://www.'
    }
  ]);
  const [newBook, setNewBook] = useState({ link: '', linkHref: '',linkArtist:'',linkYear:'' });
  const dispatchBookSet = payload => {
    let oldArray = book;
    let newArray = [...oldArray, payload];
    setBook(newArray);
    setNewBook({ linkHref: '', linkName: '',linkArtist:'',linkYear:''});
  };
  return (
    <Fragment>
      <body>
        <nav className="navigation">
          <main>
            <div className="leftContent">
              <img src="" />
              <form onSubmit={event => event.preventDefault()}>
                <h2 className="formTitle">Music BoookMarks</h2>
                <div>
                  <label htmlfor="inkTitle" className="formLabel">
                    Name a Song
                  </label>
                  <input
                    value={newBook.linkName}
                    onChange={e =>
                      setNewBook({
                        ...newBook,
                        linkName: e.currentTarget.value
                      })
                    }
                    type="text"
                    name="linkTitle"
                    placeholder=" 10 characters"
                  />
                </div>
                <div>
                  <label htmlfor="linkHref" className="formLabel">
                    link of a song
                  </label>
                  <input
                    value={newBook.linkHref}
                    onChange={e =>
                      setNewBook({
                        ...newBook,
                        linkHref: e.currentTarget.value
                      })
                    }
                    type="text"
                    name="linkHref"
                    placeholder="https://link.com"
                  />
                </div>
                <div>
                  <label htmlfor="linkArtist" className="formLabel">
                    Artist Name
                  </label>
                  <input
                    value={newBook.linkArtist}
                    onChange={e =>
                      setNewBook({
                        ...newBook,
                        linkArtist: e.currentTarget.value
                      })
                    }
                    type="text"
                    name="linkArtist"
                    placeholder="Artist Name"
                  />
                </div>
                <div>
                  <label htmlfor="linkYear" className="formLabel">
                    Year 
                  </label>
                  <input
                    value={newBook.linkYear}
                    onChange={e =>
                      setNewBook({
                        ...newBook,
                        linkYear: e.currentTarget.value
                      })
                    }
                    type="text"
                    name="linkYear"
                    placeholder="Year"
                  />
                </div>
               
                <button onClick={() => dispatchBookSet(newBook)}>Add</button>
              </form>
            </div>
            <div className="rightContent">
              <Link cards={book} />
            </div>
          </main>
        </nav>
      </body>
    </Fragment>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
