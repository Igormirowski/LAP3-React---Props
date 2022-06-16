import './App.css';


function Card () {
  return (
    <>
    <div> Hello name</div>
    <p> Your cohort was: cohort_name</p>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <Card />
        <Card />
      </header>
    </div>
  );
}

export default App;

