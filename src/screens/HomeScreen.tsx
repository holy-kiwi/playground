import React, { Component } from 'react';
import './HomeScreen.css';
import UploaderView from '../components/UploaderView';
import PluginView from '../components/PluginView';
import Plugin from '../models/Plugin';

interface HomeScreenState {
    plugins: Plugin[];
}

class HomeScreen extends Component<{}, HomeScreenState> {
    constructor(props: any) {
        super(props);
        this.state = {
            plugins: [],
        }
    }

    // doCORSRequest(options, printResult) {
    //     const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    //     var x = new XMLHttpRequest();
    //     x.open(options.method, cors_api_url + options.url);
    //     x.onload = x.onerror = function () {
    //         printResult(
    //             options.method + ' ' + options.url + '\n' +
    //             x.status + ' ' + x.statusText + '\n\n' +
    //             (x.responseText || '')
    //         );
    //     };
    //     if (/^POST/i.test(options.method)) {
    //         x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     }
    //     x.send(options.data);
    // }

    componentDidMount() {
        // this.doCORSRequest({
        //     method: 'GET',
        //     url: 'https://coinmarketcap.com/currencies/bitcoin/',
        // }, function printResult(result) {
        //     var $ = cheerio.load(result);
        //     const dollar = $("span.details-panel-item--price__value").text();
        //     console.log(dollar);
        //     console.log(result);
        // });
    }

    addPlugin = (plugin: Plugin) => {
        this.setState({
            plugins: [...this.state.plugins, plugin],
        });
    }

    render() {
        const { plugins } = this.state;
        return (
            <div className="HomeScreenContainer">
                <UploaderView onUpload={this.addPlugin} />
                {
                    plugins && plugins.map((item: Plugin, index: number) =>
                        <PluginView key={index} plugin={item} />
                    )
                }
            </div>
        )
    }
}

export default HomeScreen;