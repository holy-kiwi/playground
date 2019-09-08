import React, {Component} from 'react';
import {Form, Input, Icon, Button} from 'antd';

interface Props {
    form: any;
}

interface State {

}

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class PluginUploadScreen extends Component<Props, State>{

    componentDidMount() {
        this.props.form.validateFields();
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of from :', values);
            }
        });
    }

    render () {

        const { getFieldDecorator, getFiledsError, getFieldError, isFieldTouched } = this.props.form;
        
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');




        return (
            <Form layout="vertical" onSubmit={this.handleSubmit}>
                <Form.Item validateStatus={usernameError? 'error':''} help={usernameError || ''}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, mesage: 'Please input your username!'}],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: 'rbga(0,0,0,.25)'}}/>}
                            placeholder="Username" 
                        />,
                    )}
                </Form.Item>


                <Form.Item validateStatus={passwordError ? 'error':''} help={passwordError ||''}>
                    {getFieldDecorator('password', {
                        reles:[{required: true, message:'Please imput your Password!'}],
                    })(
                        <Input 
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }}/>}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFiledsError())}>
                        Submit!
                    </Button>}
                </Form.Item>

            </Form>
        );
    }
}