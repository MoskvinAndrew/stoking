import React from 'react';

type MenuButtonProps = {
    clickHandler: () => void
    color?: string
    open: boolean
}

export const MenuButton: React.FC<MenuButtonProps> = (props) => {
    const {
        clickHandler,
        color = "#fff",
        open,
    } = props;

    const styles = {
        container: {

        },
        line: {
            height: '2px',
            width: '16px',
            background: color,
            transition: 'all 0.2s ease',
        },
        lineTop: {
            transform: open ? 'rotate(45deg)':'none',
            transformOrigin: 'top left',
            marginBottom: '3px',
        },
        lineMiddle: {
            opacity: open ? 0: 1,
            transform: open ? 'translateX(-16px)':'none',
        },
        lineBottom: {
            transform: open ? 'translate(-1px, 1px) rotate(-45deg)':'none',
            transformOrigin: 'top left',
            marginTop: '3px',
        },
    };


    return (
        <div style={{
            height: '20px',
            width: '20px',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        }}
             onClick={clickHandler}>
            <div style={{...styles.line,...styles.lineTop}}/>
            <div style={{...styles.line,...styles.lineMiddle}}/>
            <div style={{...styles.line,...styles.lineBottom}}/>
        </div>
    );
};
