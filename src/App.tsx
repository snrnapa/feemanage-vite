import './App.css';
import Depts from './components/Depts';
import Users from './components/Users';

function App() {
  // const { dept, isLoading, isError } = useDepts();
  return (
    <>
      <p className="text-2xl">feemanage golang x react</p>
      {/* <Users /> */}
      <Depts />
    </>
  );
}

export default App;
