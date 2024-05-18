import { useEffect } from 'react';
import Corp from './util';

const corp = new Corp();

function App() {
    useEffect(() => {
        corp.activeUser(3421, 0)
            .then(result => result)
            .catch(err => err);
    }, []);

  return (
    <div>
        test page
    </div>
  );
}

export default App;
