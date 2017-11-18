const GreeterMessage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Some H1</h1>
                <p>Some Paragraph</p>
            </div>
        );
    }
});

const GreeterForm = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" ref="name"/>
                <button>Set Name</button>
            </form>
        );
    }
});


const Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: "React",
            message: "This is Message"
        };
    },

    getInitialState: function() {
        return {
            name: this.props.name
        };
    },

    onButtonClick: function(e) {
        e.preventDefault();

        const nameRef = this.refs.name;
        const name = nameRef.value;
        nameRef.value = '';

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });   
        }
    },

    render: function() {
        const name = this.state.name,
                message = this.props.message;

        return (
            <div>
               <h1>Hello {name}!</h1> 
               <p>{message}</p>

               <GreeterMessage/>

               <ul>
                    <li>Playstation 3</li>
                    <li>Drone</li>
                    <li>Hot wheels Track</li>
               </ul>

               <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
               </form>

               <GreeterForm />
            </div>
        );
    }
});

const firstName = 'Jon Raegar',
        msg = 'Hello baby boy, this is a toy for us';

ReactDOM.render(
    <Greeter name={firstName} message={msg} />, 
    document.getElementById('app')
);