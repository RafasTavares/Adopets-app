import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

//const container = document.getElementById('root');

const description = 'descrição steps';

class StepsComponent extends Component {

    render() {
        return (
            <Steps progressDot size="small" current={1}>
                <Step title="1" description={description} />
                <Step title="2" description={description} />
                <Step title="3" description={description} />
                <Step title="4" description={description} />
                <Step title="5" description={description} />
            </Steps>
        );
    }
}

export default StepsComponent;