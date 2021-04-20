import React from 'react';

function Tile(props: {
    value: string;
    name: string;
    dark?: boolean;
}) {
    const styles = {
        backgroundColor: '#' + props.value,
        color: props.dark ? '#000' : '',
    };

    const copyToClipboard = (val: string) => {
        var t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        alert('Copied!');
    }

    return(
        <div
            className="tile bemin"
            style={styles}
            onClick={() => copyToClipboard(props.value)}
        >
            {props.name}
        </div>
    )
}

export default function Palette() {
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
        (<Tile key={idx} {...color}/>)
    );
    return(
        <div className="color">
            {tile}
        </div>
    )
}