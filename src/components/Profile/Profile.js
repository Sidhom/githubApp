import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../UI/Spinner/Spinner'
import UserInfo from '../UserInfo/UserInfo'
import styles from './Profile.css'

class Profile extends Component {
    state = {
        userProfile: [],
        loading: true
    }
    componentDidMount() {
        this.getProfile(this.props.location.state.userlogin)
    }
    getProfile = (login) => {
        axios.get('https://api.github.com/users/' + login)
        .then(response=> {
            response.data.created_at = response.data.created_at.slice(0, 10)
            this.setState({ 
                loading: false,
                userProfile: response.data   
            })
            console.log(this.state.userProfile)
        })
    }
    render() {
        let user = <Spinner />;
        if (!this.state.loading) {
            user =  (
                <div>
            <div className={styles.Title}> This is   {this.state.userProfile.name}'s Profile</div>
                <UserInfo 
                 id={this.state.userProfile.id}
                 name={this.state.userProfile.name} 
                 avatar_url={this.state.userProfile.avatar_url}
                 createdAt={this.state.userProfile.created_at}
                 location={this.state.userProfile.location}
                 />
                 </div>
                )
              }
      
        return (
            <div> 
            <Link className={styles.link} to='/'>Back</Link>
            {user}
            </div>
        )
    }
}

export default Profile