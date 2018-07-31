import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

class StepsComponent extends Component {

    render() {
        return (
            <Steps progressDot size="small" current={1}>
                <Step />
                <Step />
                <Step />
            </Steps>
        );
    }
}

export default StepsComponent;