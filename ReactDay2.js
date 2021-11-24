// App.js
import './App.css';
import LikeIt from './components/aboutPage/Book';

function App() {
  return (
    <div className="App">
        <LikeIt />
        
    </div>
  );
}

export default App;


// Book.js
import React from 'react';
class LikeIt extends React.Component{
    constructor(){
        super()
        this.state={like:"false", isLoaded:"false"}
    }
    render(){
        return (<div>
            <h1 style={{color:"maroon", fontSize:"50px"}}>Like Status : {this.state.like=="true" ? "Pink" : "Gray" }</h1>
            <button onClick = {this.changeStatus}>Click to like</button>
        </div>)
    }
    changeStatus = () => {
        this.setState({like:"true", isLoaded:"true"});
    }
    
}
export default LikeIt;