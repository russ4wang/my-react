import React, { Component } from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleCLick = this.handleCLick.bind(this)//将handleCLick绑定在当前组件
  }
  render() {
    const { content,test } = this.props;
    return (
      <div onClick={this.handleCLick}>
        {test}-{content}
      </div>
    )
  }
  handleCLick() {
    alert(this.props.index)//获取父组件传来的值
    //调用父组件的方法
    const { itemDelete, index } = this.props;
    itemDelete(index)
    // this.props.itemDelete(this.props.index) 
  }
}
TodoItem.propTypes = {//对传入的值做校验，限制传入值的数值类型
  content:PropTypes.arrayOf(PropTypes.number,PropTypes.string),//content是一个数值或者字符串类型的值
  itemDelete:PropTypes.func,
  index:PropTypes.number,
  test:PropTypes.string.isRequired,//必须传递
}
TodoItem.defaultProps = {//假设没传test，可以定义一个默认值
  test:'hello'
}
export default TodoItem;