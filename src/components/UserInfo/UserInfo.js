import React, { Component } from 'react'
import styles from './UserInfo.css'

class UserInfo extends Component {
   
   
    render() {
        const imageStyle= {
        width: '100%'
        }
        return (
            <div className={styles.Card}>
            <img src={this.props.avatar_url} alt="pic" style={imageStyle} />
            <h1>{this.props.name}</h1>
            <p className={styles.Location}> {this.props.location}</p>
            <p className={styles.creationDate}>Profile Created at : {this.props.createdAt}</p>
          </div>
        )
    }
}
export default UserInfo