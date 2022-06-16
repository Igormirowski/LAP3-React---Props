import './App.css';


function Card (props) {
  console.log(props)
  return (
    <>
    <div> Hello {props.name}</div>
    <p> Your cohort was: {props.cohort}</p>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card name="Igor" cohort="Auguste"/>
        <Card name="random" cohort="Auguste"/>
        <Card name="Igor2" cohort="Auguste2" />
      </header>
    </div>
  );
}

export default App;

