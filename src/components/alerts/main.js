import React from 'react';
import {Router} from 'react-router';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Alert.error('there is wrong password', {
        //    position: 'bottom',
        // });
        return (
            <div>
                <span>
                    {this.props.children}
                </span>
                <Alert stack={{limit: 3}} />
            </div>
        )
    }
}

export default Main;
