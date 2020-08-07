import React from 'react';

export default class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            price: 0.0,
            imgurl: ""
        }
        this.handleChange=this.handleChange.bind(this)
        this.cancelInput=this.cancelInput.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    cancelInput(){
        this.setState({
            name: "",
            price: 0.0,
            imgurl: ""
        })
    }

    render(){
        const {name, price, imgurl} = this.state;
        const {addProduct} = this.props;
        return(
            <div>
                Form
                <form
                    onSubmit={e => {
                        addProduct(e, name, price, imgurl)
                        console.log(this.state.name)
                        this.setState({
                            name: "",
                            price: 0.0,
                            imgurl: ""
                        })
                    }}>
                    <input 
                        name="name" 
                        type="text"
                        value={name}  
                        onChange={(e) => this.handleChange(e)}/>    
                    <input 
                        name="price" 
                        type="text"
                        value={price}  
                        onChange={(e) => this.handleChange(e)}/>    
                    <input 
                        name="imgurl" 
                        type="text"
                        value={imgurl}  
                        onChange={(e) => this.handleChange(e)}/>    
                    <button onClick={() => this.cancelInput()}>Cancel</button>
                    <button>Add to Inventory</button>

                </form>  
            </div>
        )
    }
}