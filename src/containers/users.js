import React, { Component } from 'react';
import { connect } from 'react-redux'
import styles from './users.css'
import User from '../components/User'
import Spinner from '../components/UI/Spinner/Spinner'
import Title from '../components/UI/Title/Title'
import * as actionCreators  from '../store/actions/actions'
class Users extends Component {
    state = {
        users: [],
        loading: true
    }
componentDidMount() {
   // this.fetchUsers()
  this.props.initAllUsers();
   
}
//  fetchUsers = () => {
//     axios.get('https://api.github.com/users')
//     .then(response=> {
//         const users = response.data.slice(0,6)
//         this.setState({ 
//                         users: users,
//                         loading: false })   
//                     })     
// }
    render() {
        let users = <Spinner />;
        if (!this.props.loading) {
            users = this.props.users.map(user => {
                return (
                <User 
                 key={user.id}
                 id={user.id}
                 login={user.login} />
                )
              }
          
              )
        }
    
return (
    <div>
    <Title />
    <div className={styles.Users} >
    {users}
    </div>
    </div>
)
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        users: state.users,
        loading: state.loading
    }
   
}
const mapDispatchToProps = (dispatch) => {
    return {
        initAllUsers: () => dispatch(actionCreators.initUsers())

    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Users);