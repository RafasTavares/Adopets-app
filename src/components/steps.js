import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

const container = document.getElementById('__react-content');

function generateRandomSteps() {
    const n = Math.floor(Math.random() * 3) + 3;
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push({
            title: `Step ${(i + 1)}`,
        });
    }
    return arr;
}
const steps = generateRandomSteps();

class StepsComponent extends React.Component {
    state = {
        currentStep: Math.floor(Math.random() * steps.length),
    };
    /*
    componentDidMount() {
      // You can dynamically set tail's left position based on main's width for each step.
      this.stepsRefs.forEach(s => {
        if (s.refs.tail) {
          s.refs.tail.style.left = `${s.refs.main.offsetWidth / 2}px`;
        }
      });
    }
    */
    nextStep = () => {
        let s = this.state.currentStep + 1;
        if (s === steps.length) {
            s = 0;
        }
        this.setState({
            currentStep: s,
        });
    }
    render() {
        const cs = this.state.currentStep;
        this.stepsRefs = [];
        return (
            <footer className="page-footer font-small blue pt-4">
             <div className="footer-copyright text-center py-3">
            <form className="my-step-form">
                <div>DEMO</div>
                <div>steps{cs + 1}</div>
                <div className="my-step-container">
                    <Steps current={cs}>
                        {
                            steps.map((s, i) => {
                                return (
                                    <Step ref={c => this.stepsRefs[i] = c}
                                        key={i}
                                        title={s.title}
                                    />
                                );
                            })
                        }
                    </Steps>
                </div>

                <div><button type="button" onClick={this.nextStep}>Next</button></div>
            </form>
            </div>
            </footer>
        );
    }
}

export default StepsComponent;

//ReactDOM.render(<StepsComponent />, container);  

