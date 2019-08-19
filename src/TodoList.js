import React, { Component, Fragment } from 'react';//定义一个组件
import './style.css'
class TodoList extends Component {//创建一个组件
    constructor(props) {
        super(props);
        this.state = {//组件的状态
            inputValue: '',//input内容
            list: []
        }
    }
    render() {//使用JSX语法必须引入react,外层必须有一个包裹元素标签,利用Fragment可以隐藏掉外层包裹的元素标签。
        return (
            <Fragment>
                <div>
                    {/* value={this.state.inputValue}绑定数据,数据变化页面响应变化 */}
                    <label htmlFor='insertArea'>点击输入内容</label>
                    <input
                        id='insertArea'
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)} />
                    {/* 上面handleInputChange函数的this指向需要改变绑定当前this指向 */}
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemDelete.bind(this, index)} dangerouslySetInnerHTML={{__html:item}}></li>//循环列表时，必须绑定一个唯一值,dangerouslySetInnerHTML危险设置html值
                        })
                    }
                </ul>
            </Fragment>
        );
    }
    handleInputChange(e) {
        console.log(e.target.value)//获取到输入的内容
        this.setState({//react里面提供的改变state中数据的方法
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete(index) {
        // immutable：
        // state不允许直接做任何改变，需要先copy出来改变以后再赋值给state中的数据变量
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default TodoList;
