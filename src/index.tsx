import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as $ from 'jquery'

class Hello extends React.Component<{}, { message: string }> {
    constructor(props) {
        super(props)
        this.state = { message: '' }
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.click}>Ok</button>
                </div>
                <div>
                    {this.state.message}
                </div>
            </div>
        )
    }

    click = () => {
        if (this.state.message) {
            this.setState({ message: '' })
        }
        else {
            $.ajax({
                url: 'hello.json'
            }).then(data => {
                this.setState(data)
            }).fail(error => {
                console.log(error)
            })
        }
    }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
