import { PageContainer } from '@ant-design/pro-components';

import {
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProFormText,
    ProConfigProvider,
} from '@ant-design/pro-components';
import styles from './index.less';


const LoginPage: React.FC = () => {
    return (
        <PageContainer ghost>
                        
            <ProConfigProvider hashed={false} >
                <div style={{ backgroundColor: 'white' }} className={styles.loginform}>
                    <LoginForm
                        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                        title="Github"
                        subTitle="全球最大的代码托管平台"
                    >
                        <ProFormText
                            name="username"
                            fieldProps={{
                                size: 'large',
                                prefix: <UserOutlined className={'prefixIcon'} />,
                            }}
                            placeholder={' 用户名'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        />
                        <ProFormText.Password
                            name="password"
                            fieldProps={{
                                size: 'large',
                                prefix: <LockOutlined className={'prefixIcon'} />,
                            }}
                            placeholder={' 密码'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码！',
                                },
                            ]}
                        />

                    </LoginForm>
                </div>
            </ProConfigProvider>
        </PageContainer>
    );
};

export default LoginPage;
