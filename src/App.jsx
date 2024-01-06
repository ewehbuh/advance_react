import Starter from './tutorial/01-useState/starter/01-error-example'
import UseStateArray from './tutorial/01-useState/starter/03-useState-array'
import UseStateObject from './tutorial/01-useState/starter/04-useState-object';
import UseStateGotcha from './tutorial/01-useState/starter/05-useState-gotcha';
function App() {
  return (
    <div className='container'> <Starter/>
    {/* <UseStateArray></UseStateArray> */}
    <UseStateObject/>
    <UseStateGotcha/>
    </div>
   
  );
}

export default App;
