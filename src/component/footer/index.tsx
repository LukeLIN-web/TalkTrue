import React, { ReactChild } from 'react';
import './index.less'

interface FooterProps{
    /**
     * 子组件
     */
    children:ReactChild;
    /**
     * 高
     */
    height:number;
    /**
     * 是否固定
     */
    fix?:boolean
}
/**
 * 固定在底部的容器组件
 */
export const Footer:React.FC<FooterProps> =({children,height,fix}:FooterProps)=>{
    return (
        <div className={`footerOutSide`}>
            <div
                className="footer front"
                style={{height}}
            >
                {children}
            </div>
            <div
                className="footer"
                style={{height}}
            />
        </div>
    )
}