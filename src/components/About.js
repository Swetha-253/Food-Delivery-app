// const About=()=>{
//     return (
//         <div>
//             <h1>this is namaste react</h1>
//         </div>
//     );
// };
import React from 'react';
import ProfileClass from './ProfileClass';
import UserContext from '../utils/UserContext';
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
componentDidMount(){
  console.log("parent componentDidMouunt");
  
}
// componentDidUpdate(){
//     console.log("parent-update");
// }
componentWillUnmount(){
    console.log("parent-unmount");
}
render(){
    console.log("parent-render");
    return (
        <div>
           <UserContext.Consumer>{({loggedInUser})=>(<h1>{loggedInUser}</h1>)}
            </UserContext.Consumer>
            <ProfileClass />
        </div>
    )
}
}
export default About;