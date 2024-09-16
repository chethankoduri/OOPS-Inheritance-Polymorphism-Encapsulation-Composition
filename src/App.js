import logo from './logo.svg';
import './App.css';
import Cat from './classes/Cat';
import Cheetah from './classes/Cheetah';

function App() {

  let ragdoll = new Cat();
  ragdoll.foodHabits();
  ragdoll.sleepingHabits();
  ragdoll.facingHuman();

  console.log("---*---*---*---");
  let chirutha = new Cheetah();
  chirutha.foodHabits();
  chirutha.sleepingHabits();
  chirutha.facingHuman();

  chirutha.calculateResult();

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
