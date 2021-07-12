import './App.css';
import {useEffect, useState} from 'react'

const searchList = [
  {
    name: 'Hotline',
    id: '001',
    image: '../images/hotline.png',
    amount: 10,
    added: '2014-01-01'
  },
  {
    name: 'Neon Jungle',
    id: '002',
    image: '../images/neonjungle.png',
    amount: 2,
    added: '2014-01-01'
  },
  {
    name: '3 Hit Pay',
    id: '003',
    large: true,
    image: '../images/3hitpay.png',
    amount: 4,
    added: '2014-01-01'
  },
  {
    name: 'Day of the Dead',
    id: '004',
    image: '../images/dayofthedead.png',
    amount: 2,
    added: '2014-01-01'
  },
  {
    name: 'Dr Jekyll and Mr Hyde',
    id: '005',
    image: '../images/mrjekyll.png',
    amount: 5,
    added: '2014-01-01'
  },
  {
    name: 'Day of the Dead',
    id: '006',
    image: '../images/dayofthedead.png',
    amount: 7,
    added: '2014-01-01'
  },
  {
    name: 'Sea of Tranquility',
    id: '007',
    image: '../images/seaoftranquility.png',
    amount: 2,
    added: '2014-01-01'
  },
  {
    name: 'Aloha',
    id: '008',
    image: '../images/aloha.png',
    amount: 1,
    added: '2014-01-01'
  },
  {
    name: 'Dr Jekyll and Mr Hyde',
    id: '009',
    image: '../images/mrjekyll.png',
    amount: 8,
    added: '2014-01-01'
  },
  {
    name: 'Day of the Dead',
    id: '010',
    image: '../images/dayofthedead.png',
    amount: 11,
    added: '2014-01-01'
  },
  {
    name: 'Dr Jekyll and Mr Hyde',
    id: '011',
    image: '../images/mrjekyll.png',
    amount: 6,
    added: '2014-01-01'
  },
]

const searchList2 = [{
    name: 'Fruit Spin',
    id: '012',
    image: '../images/fruitspin.png',
    amount: 2,
    added: '2020-01-01'
  },
  {
    name: 'Jack Hammer',
    id: '013',
    image: '../images/jackhammer.png',
    amount: 4,
    added: '2014-01-01'
  },
  {
    name: 'Spinata Grande',
    id: '014',
    image: '../images/grande.png',
    amount: 6,
    added: '2014-01-01'
  },
  {
    name: 'Sugar Smash',
    id: '015',
    image: '../images/sugarsmash.png',
    amount: 7,
    added: '2014-01-01'
  },
  {
    name: 'Jumanji',
    id: '016',
    image: '../images/jumanji.png',
    large: true,
    amount: 2,
    added: '2014-01-01'
  },
  {
    name: 'Fa-fa Twins',
    id: '017',
    image: '../images/fafatwins.png',
    amount: 3,
    added: '2014-01-01'
  },
  {
    name: 'Smokin Hot Gems',
    id: '018',
    image: '../images/smokinhotgems.png',
    amount: 9,
    added: '2014-01-01'
  },
  {
    name: 'Gonzos Quest',
    id: '019',
    image: '../images/fafatwins.png',
    amount: 1,
    added: '2014-01-01'
  },
  {
    name: 'Hotline',
    id: '020',
    image: '../images/hotline.png',
    amount: 12,
    added: '2014-01-01'
  },
  {
    name: 'Fruit Spin',
    id: '021',
    image: '../images/fruitspin.png',
    amount: 1,
    added: '2014-01-01'
  },
  {
    name: 'Spinata Grande',
    id: '022',
    image: '../images/grande.png',
    amount: 5,
    added: '2003-01-01'
  },
]

function App() {

  const [game, setGame] = useState([]);
  const [game2, setGame2] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [filteredGames2, setFilteredGames2] = useState([]);
  const [showResultsTop, setShowResultsTop] = useState(false);
  const [showResultsAll, setShowResultsAll] = useState(true);
  const [showResultsNew, setShowResultsNew] = useState(false);

  const searchData = [...searchList, ...searchList2];

  useEffect(() => {
    setLoading(true);
    setGame(searchList);
    setGame2(searchList2);
    setLoading(false);
  }, []);

  useEffect(() => {
    setFilteredGames(
      game.filter((gameInfo) =>
        gameInfo.name.toLowerCase().includes(search.toLowerCase())
      )
    );

    setFilteredGames2(
      game2.filter((gameInfo) =>
        gameInfo.name.toLowerCase().includes(search.toLowerCase())
      )
    );

  }, [search, game, game2]);

  if (loading) {
    return <p>Loading Games...</p>;
  }

  const onClickTop = () => {
    setShowResultsTop(true);
    setShowResultsAll(false);
    setShowResultsNew(false);
  }

  const onClickAll = () => {
    setShowResultsAll(true);
    setShowResultsTop(false);
    setShowResultsNew(false);
  }

  const onClickNew = () => {
    setShowResultsAll(false);
    setShowResultsTop(false);
    setShowResultsNew(true);
  }

  // acsending
  const sortBy = searchData.sort((a, b) => {
    return new Date(b.added) - new Date(a.added);
  })

  return (
    <>
      <div className="nav">
        <ul>
          <li onClick={onClickAll}>ALL</li>
          <li onClick={onClickNew}>NEW</li>
          <li onClick={onClickTop}>TOP</li>
          <li>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search Games"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </li>
        </ul>
      </div>

      {filteredGames.length === 0 && filteredGames2.length === 0 && (
        <>
          <div>No Games Found</div>
        </>
      )}

      {/* All Results  */}
        {showResultsAll ?
          <>
            <div className={filteredGames.length < 7 ? 'gridTop': 'grid' && filteredGames.length === 0 ? 'grid hide-grid' : 'grid'}>
              {filteredGames.map(game => (
                <div className={game.large ? 'item large' : 'item'} key={game.id}>
                  <img className="img-grid" src={`${game.image}`} alt={`${game.name}`} />
                </div>
              ))}
            </div>

            <div className={filteredGames2.length < 7 ? 'gridTop': 'grid' &&  filteredGames2.length === 0 ? 'grid2 hide-grid' : 'grid2'}>
              {filteredGames2.map(game => (
                <div className={game.large ? 'item large' : 'item'} key={game.id}>
                  <img className="img-grid" src={`${game.image}`} alt={`${game.name}`} />
                </div>
              ))}
            </div>
          </> : null
        }
      {/* All Results */}

      {/* Top Results  */}
        {showResultsTop ?
          <>
            <h2 className="text-align">Top Games</h2>
            <div className={filteredGames2.length === 0 ? 'gridTop hide-grid' : 'gridTop'}>
              {searchData.filter(gameTop => gameTop.amount > 5).map(filteredTop => (
                <div className='item' key={filteredTop.id}>
                  <img className="img-grid" src={`${filteredTop.image}`} alt={`${filteredTop.name}`} />
                </div>
              ))}
            </div> 
          </>: null
        }
      {/* Top Results  */}

      {/* New Results  */}
      {showResultsNew ?
          <>
            <h2 className="text-align">New Games</h2>
            <div className={filteredGames2.length === 0 ? 'gridTop hide-grid' : 'gridTop'}>
              {sortBy.map(filteredTop => (
                <div className='item' key={filteredTop.id}>
                  <img className="img-grid" src={`${filteredTop.image}`} alt={`${filteredTop.name}`} />
                </div>
              ))}
            </div> 
          </>: null
        }
      {/* New Results  */}
    </>
  );
}

export default App;
