import React, { Component, Fragment } from 'react';//定义一个组件
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {//创建一个组件
  constructor(props) {
    super(props);
    this.state = {//组件的状态
      inputValue: '',//input内容
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)//绑定最好放在最上面
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {//使用JSX语法必须引入react,外层必须有一个包裹元素标签,利用Fragment可以隐藏掉外层包裹的元素标签。
    return (
      <Fragment>
        <div>
          {/* value={this.state.inputValue}绑定数据,数据变化页面响应变化 */}
          <label htmlFor='insertArea'>点击输入内容test</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange} />
          {/* 上面handleInputChange函数的this指向需要改变绑定当前this指向 */}
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            this.getTodeItem()
          }
        </ul>
      </Fragment>
    );
  }
  getTodeItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          {/* 父组件传值给子组件，以及传递方法给子组件,
          父组件通过绑定值的方法传递给子组件值，子组件通过this.props获取值或者调用父组件的方法
          子组件通过父组件传递过来的方法来向父组件传递值，
          单向数据流，子组件可以获得父组件中的值，但是不可以直接改变父组件中的值，只能通过调用父组件传递过来的父组件本身的方法改变父组件中的值 */}
          <TodoItem  index={index} content={item} itemDelete={this.handleItemDelete} />
          {/*<li key={index} onClick={this.handleItemDelete.bind(this, index)} dangerouslySetInnerHTML={{ __html: item }}></li>//循环列表时，必须绑定一个唯一值,dangerouslySetInnerHTML危险设置html值*/}
        </div>
      )
    })
  }
  handleInputChange(e) {//输入框内容改变时获取输入框中的内容值
    console.log(e.target.value)//获取到输入的内容
    const value = e.target.value//先保存，再使用
    this.setState(()=>({
        inputValue:value
      }))
    // this.setState({//react里面提供的改变state中数据的方法
    //   inputValue: e.target.value
    // })
  }
  handleBtnClick() {//提交按钮
    //prevState相当于this.state
    this.setState((prevState)=>({
      list:[...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handleItemDelete(index) {//点击删除
    // immutable：
    // state不允许直接做任何改变，需要先copy出来改变以后再赋值给state中的数据变量
    // const list = [...this.state.list];//直接赋值一样的 const list = this.state.list
    this.setState((prevState)=>{
      const list = [...prevState.list]
      list.splice(index, 1);//删除掉索引为index的数组元素
      return {list}
    })
    // this.setState({
    //   list: list,//再重新赋值给state里的list
    // })
  }
}

export default TodoList;
