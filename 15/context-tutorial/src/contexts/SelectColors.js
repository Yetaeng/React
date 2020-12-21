import React, { Component } from 'react';
import ColorContext from '../contexts/color'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
    // this.context를 조회하면 현재 Context의 value를 기리킴
    static contextType = ColorContext;
    // static contextType을 정의하면 클래스 메서드에서도 Context에 넣어 둔 함수를 호출할 수 있지만, 한 클래스에서 하나의 Context밖에 사용하지 못한다.

    handleSetColor = color => {
        this.context.actions.setColor(color);
    };
    handelSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    }

    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                    <div style={{ display: 'flex' }}>
                    {colors.map(color => (
                        <div
                            key={color}
                            style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer'
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={e => {
                                e.preventDefault();
                                this.handelSetSubcolor(color);
                            }}
                        />
                    ))}
                    </div>  
                <hr />
            </div>
        );
    };
};

export default SelectColors;