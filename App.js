const parent = React.createElement("div",{id:"parent"}, 
    [React.createElement("div",{id:"child"},[
     React.createElement("h1",{},"Hello!!!"),
     React.createElement("h4",{},"Sibling Elemets..."),
    ]),
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Hello!!!"),
        React.createElement("h4",{},"Sibling Elemets..."),
       ])
    ]
);

const heading = React.createElement("h2",{id:"heading"},"Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);