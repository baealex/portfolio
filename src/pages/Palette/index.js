import React from 'react';

import './style.scss';

function Tile(props) {
    const styles = {
        backgroundColor: '#' + props.color.value,
    }
    styles['color'] = props.color.dark ? '#000' : '';

    const copyToClipboard = (val) => {
        var t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        alert('Copied!');
    }

    return(
        <div className="tile bemin" style={styles} onClick={() => copyToClipboard(props.color.value)}>{props.color.name}</div>
    )
}
function Palette() {
    const colorList = [
        {
            value: '474787',
            name: 'Deep-Purple',
        },
        {
            value: '515199',
            name: 'Shallow-Purple',
        },
        {
            value: '706fd3',
            name: 'Minimal-Purple',
        },
        {
            value: '9b59b6',
            name: 'Live-Purple',
        },
        {
            value: '8e44ad',
            name: 'Grape-Purple',
        },
        {
            value: '8c00ff',
            name: 'Vivid-Purple',
        },
        {
            value: 'f7faff',
            name: 'White-Purple',
            dark: true
        },
    ]
    const tile = colorList.map((color, idx) => 
        (<Tile key={idx} color={color}/>)
    );
    return(
        <div className="color">
            {tile}
        </div>
    )
}

export default Palette;