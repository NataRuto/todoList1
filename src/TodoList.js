import { Component } from "react";
import icon from './icon.jpg';

export class TodoList extends Component{
    state = {
        userInput: "",
        todoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
        console.log(e);
    }

    addItem(input) {
        if(input === '') {
            alert("please, enter an item")
        }
        else{
            let listArray = this.state.todoList;
            listArray.push(input);
            this.setState({todoList: listArray, userInput: ""})
        }
        
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.todoList;
        listArray = [];
        this.setState({todoList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
               <input type="text" 
               placeholder="To do list for today" 
               onChange={(e)=> this.onChangeEvent(e.target.value)}
               value={this.state.userInput}/>
            </div>
            <div className="container">
                <button className="add btn" onClick = {() => this.addItem(this.state.userInput)}>ADD</button>
            </div>
            <ul>
                {this.state.todoList.map((item, i) => 
                (<li onClick={this.crossedWord} key={i}>
                <img src={icon} width="10px" alt="icon"/>{item}</li>))} 
            </ul>
            <div className="container">
                <button className="delete btn" onClick={()=> this.deleteItem()}>DELETE</button>
            </div>
            </form>
            </div>

        )
    }

}

