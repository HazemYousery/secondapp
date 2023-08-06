import './App.css';
import React ,{Component} from 'react';
import AddItem from './additem';
import ToDoList from './todoitems';
class App extends Component{

state = {
  items :[
    {id:1,name:"hazem",age:25},
    {id:2,name:"omar",age:27},
    {id:3,name:"Aly",age:30}

  ]
}
handlechange=(e)=>{
  this.setState({
[e.target.id]:e.target.value 
 })
}
handleSubmit=(e)=>
{
  e.preventDefault();
this.Addd(this.state)


}

Addd = (item)=>{
  let items = this.state.items;
  items.push(item);
  this.setState({
  items
  })
    }
    DeleteItem=(id)=>{
      let items = this.state.items.filter(item=>{
        return item.id !== id
      })
      this.setState({
        items
        })
    }
  render(){
  return (
    <div className="App">
<p className='first_p'>To Do List App</p>
<ToDoList items={this.state.items} DeleteItem={this.DeleteItem}/>
<AddItem  handlechange = {this.handlechange}  handleSubmit={this.handleSubmit} Addd={this.Addd} items = {this.state.items}/>


    </div>
  );
  }
}
export default App;