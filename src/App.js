import React from 'react'
import Cards from './Cards'
import {robots} from './robots'
import Scroll from './Scroll'

class App extends React.Component{
    constructor(){  
        super()
        this.state={
            robots:robots,
            search:''
        };
    }
    onSearch= (event)=>{
     console.log(event.target.value)
     const searched =[]
     for (let i = 0; i < robots.length; i++) {
         const e = robots[i];
         if( e.search(event.target.value) !==-1 ){
             
            console.log("yes");
            searched.push(e)

         }
        if(i<robots.length-1 ) {
              console.log(searched);
            this.setState(
                {
            robots: searched

                }
            );  
        }
         
     }
     
    }
    render(){
        return(
            <div>
                 <h1>ROBOFREINDS</h1>
                 <input id="search" type="text" onChange={this.onSearch}></input>
                 <Scroll>
                 <Cards robots={this.state.robots} />

                 </Scroll>
            </div>
             );
    }
}
// const App =()=>{
//     return(
//    <div>
//         <h1>ROBOFREINDS</h1>
//         <input id="search" type="text"></input>
//         <Cards />
//    </div>
//     );
// }
export default App