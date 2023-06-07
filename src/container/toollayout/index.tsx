import React, {ReactNode, useState} from 'react';
import * as styles from './index.module.less';

interface ToolLayoutProps {
    children?: ReactNode;
};

export const ToolLayout = (props: ToolLayoutProps) => {
    return (
        <React.Fragment>
            <div className={styles.red}>
                스타일 테스트asdfsadf
                <span className={styles.green}>그린</span>
                <span className={styles.testRule}>블루</span>
                {props.children}
            </div>
            <span className={styles.green}>asdfasdf</span>
        </React.Fragment>
    );
};
