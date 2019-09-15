import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PluginAgent from '../agent/PluginAgent';
import Plugin from '../models/Plugin';
import { HomeScreenStore } from '../stores';
import PluginList from '../presentational/PluginList';
import { Modal } from 'antd';
import { withRouter } from 'react-router';
import { History } from 'history';

interface Props {
    HomeScreenStore?: HomeScreenStore;
    history: History;
}

interface State {
    plugins: Plugin[];
    pluginsLoading: boolean;
    downloadSuccessModalOpen: boolean;
}

@inject('HomeScreenStore') @observer
class PluginListContainer extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            plugins: [],
            pluginsLoading: true,
            downloadSuccessModalOpen: false,
        }
    }

    async componentDidMount() {
        const plugins: Plugin[] = await PluginAgent.fetchPlugins();
        this.setState({
            plugins,
            pluginsLoading: false,
        })
    }

    onDownload = async (pluginId: string) => {
        const plugin: Plugin = await PluginAgent.fetchPlugin(pluginId);
        this.props.HomeScreenStore.addPlugin({ ...plugin, left: 100, top: 100 });
        this.showModal();
    }

    showModal = () => {
        this.setState({
            downloadSuccessModalOpen: true,
        });
    };

    handleOk = e => {
        this.setState({
            downloadSuccessModalOpen: false,
        }, () => {
            this.props.history.push('/');
        });
    };

    handleCancel = e => {
        this.setState({
            downloadSuccessModalOpen: false,
        });
    };

    render() {
        return <>
            <PluginList {...this.state} onDownload={this.onDownload} />
            <Modal
                title="알림"
                visible={this.state.downloadSuccessModalOpen}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <p>홈 화면에 추가되었습니다. 홈으로 이동하시겠습니까?</p>
            </Modal>
        </>
    }
}

export default withRouter(PluginListContainer);
