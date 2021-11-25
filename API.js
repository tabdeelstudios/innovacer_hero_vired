import React from 'react';

export default class Contact extends React.Component {
    // Constructor
    constructor()
    {
        super()
        this.state = {
            items:[],
            isLoaded:false
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((json) => {
            this.setState({
                items:json,
                isLoaded:true
            })
        });
    }

    render(){
        const {isLoaded, items} = this.state;
        if(isLoaded)
        {
            console.log(items);
            return (
                <div>
                    <h1>data loaded</h1>
                    {
                        items.map((item)=>(
                            <li key={item.id}>
                                Name:{item.name}
                            </li>
                        ))
                    }
                </div>);
        }
        else
            return <h1>Loading...</h1>
    }
}