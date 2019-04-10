import React from "react";
export default (Component)=>{
  return class WithHOCComponent extends React.Component{
    render(){
      return (<div>
        <p>高阶组件</p>
        <Component {...this.props} />
      </div>)
    }
  }
}