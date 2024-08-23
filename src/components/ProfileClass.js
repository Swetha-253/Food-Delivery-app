import React from 'react';
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UserInfo : {
                name:"dummy", 
            }
        }
        console.log("child-constructor")
    }
componentDidMount(){
  console.log("child componentDidMouunt");
  this.setState({
    UserInfo:{
        name:"swetha",
    }}
  )
}
componentDidUpdate(){
    console.log("child-update");
}
componentWillUnmount(){
    console.log("child-unmount");
}
render(){
    console.log("child-render");
    return (
        <div>
            <h1>Name: {this.state.UserInfo.name}</h1>
        </div>
    )
}
}
export default ProfileClass;