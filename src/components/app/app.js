import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css';

export default class App extends Component {
  
  maxId = 100;
  word = ''
  state = {
    todoData: [
      this.createLabel("Drink Coffee"),
      this.createLabel("Make Awesome App"),
      this.createLabel("Have a lunch")
    ]
  };  
  copy = Object.keys(this.state.todoData);
  copy = Object.values(this.state.todoData);
  
  toggleProperty(copyArr,arr, id, propName) {
    const Index = arr.findIndex((el) => el.id === id);
    const copyIndex = copyArr.findIndex((el) => el.id === id);
    const oldItem = arr[Index];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    this.copy[copyIndex][propName] = newItem[propName];
    return [
      ...arr.slice(0, Index),
      newItem,
      ...arr.slice(Index+1)
    ];
  }
  createLabel (label) {
    return {
      label,
      important: false,
      id: this.maxId++,
      done:false
    }
  }
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const Index = todoData.findIndex((el) => el.id === id);
      const copyIndex = this.copy.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, Index),
        ...todoData.slice(Index+1)
      ];
      const copyArray = [
        ...this.copy.slice(0, copyIndex),
        ...this.copy.slice(copyIndex+1),
      ]
      this.copy = copyArray;
      return {
        todoData: newArray,
      };
    })
  }
  addForm = (text) => {
    const newItem = this.createLabel(text);
    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];
      this.copy = newArr;
      return {
        todoData: newArr
      };
    })

  }
  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(this.copy,todoData, id, 'important')
      };
    })
  }
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(this.copy,todoData, id, 'done')
      };
    })
  }
  searchItem = (itemText) => {  
    this.setState(({todoData}) => {
      const itemIncludesText = this.copy.filter((el) => el.label.toLowerCase().indexOf(itemText.toLowerCase()) > -1);
      if(itemIncludesText.length !== 0) {
        return {
          todoData: itemIncludesText
        }; 
      }
      else if(itemIncludesText.length === 0){
        return {
          todoData: this.copy
        }
        
      }
    })
  }
  onButtonClick = (text) => {
    if(text === "onButtonAllClick") {
      this.setState(({todoData}) => {
        return {
          todoData: this.copy
        }
      })
    }
    else if(text === "onButtonActiveClick") {
      this.setState(({todoData}) => {
        const filterText = this.copy.filter(el => el.done === false);
        return {
          todoData: filterText
        }; 
      })
    }
    else if(text === "onButtonDoneClick") {
      this.setState(({todoData}) => {
        const filterText = this.copy.filter(el => el.done === true);
        return {
          todoData: filterText
        }; 
      })
    }
  }
  render() {
    const {todoData} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel 
          searchItem={this.searchItem}/>
          <ItemStatusFilter 
          onButtonClick={this.onButtonClick}/>
        </div>

        <TodoList
        todos={this.state.todoData} 
        onDeleted={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}
        />
        <ItemAddForm
        addForm={this.addForm}
        />
      </div>
    );
  }
  
};