import React from "react"

export default class About extends React.Component {
    constructor(){
        super()
        this.state = {
            items:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE', 'Access-Control-Allow-Headers': 'accept, authorization, origin'},
            body: JSON.stringify({template_id:15622, username:"Aquib", password:"AquibHero@17", text0:"Top text", text1:"Bottom text"})
        }
        fetch(
            'https://api.imgflip.com/caption_image', requestOptions).then((res)=>res.json()).then((res)=> console.log(res)
        )
    }
    render(){
        return <h1>This is the about page!</h1>
    }
}