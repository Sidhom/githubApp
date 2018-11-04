import React, { Component } from 'react'
import {  withRouter } from "react-router-dom";
import styles from './User.css'

class User extends Component {

    getProfile = () => {
        this.props.history.push({
            pathname: '/Profile/' + this.props.login,
            state: { userlogin: this.props.login }
        }
    )
    }

    render() {
        return (
            <article className={styles.Info} onClick={this.getProfile}>
            <h1 className={styles.Id}>{this.props.id}</h1>
            <div className={styles.Login}>
            {this.props.login}
            </div>
            </article>
        
        )
    }
}
export default withRouter(User);