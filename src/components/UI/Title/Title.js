import React from 'react'
import Aux from '../../../hoc/Aux'
import  styles from './Title.css'

const Title = ( props ) => (
    <Aux>
    <div className={styles.Content}>GitHub Users</div>
        {props.children}
        </Aux>
);

export default Title;