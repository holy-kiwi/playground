import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PluginAgent from '../agent/PluginAgent';
import Plugin from '../models/Plugin';
import { HomeScreenStore } from '../stores';
import { match, withRouter } from 'react-router';
import PluginDetail from '../presentational/PluginDetail';
import { Modal } from 'antd';
import { History } from 'history';

interface Props {
    HomeScreenStore?: HomeScreenStore;
    match: match<{ id: string }>;
    history: History;
}

interface State {
    plugin: Plugin;
    loading: boolean;
    downloadSuccessModalOpen: boolean;
}

@inject('HomeScreenStore') @observer
class PluginDetailContainer extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            plugin: undefined,
            loading: true,
            downloadSuccessModalOpen: false,
        }
    }

    async componentDidMount() {
        const plugin: Plugin = await PluginAgent.fetchPlugin(this.props.match.params.id);
        this.setState({
            plugin,
            loading: false,
        });
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
            <PluginDetail {...this.state} onDownload={() => this.onDownload(this.props.match.params.id)} />
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

export default withRouter(PluginDetailContainer);
