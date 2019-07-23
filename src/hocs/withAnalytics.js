import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default () => Composed =>
    class extends Component {
        static getInitialProps(ctx) {
            if(Composed.getInitialProps) {
                return Composed.getInitialProps(ctx);
            }

            return {};
        }

        componentDidMount() {
            console.log('PAGE VIEW');

            ReactGA.initialize('ID_ANALYTICS');
            ReactGA.pageview(window.location.pathname);
        }

        render() {
            return <Composed { ...this.props } />
        }
    }