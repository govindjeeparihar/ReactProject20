import React from 'react';







class News extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            color: "",
            bgColor: "white"
        };

        this.colorValue = this.colorValue.bind(this);
        this.setNewColor = this.setNewColor.bind(this);
    }

    colorValue(e) {
        this.setState({
            color: e.target.value
        });
    }

    setNewColor(e) {
        this.setState({
            bgColor: this.state.color
        });

        e.preventDefault();
    }

    render() {
        var squareStyle = {
            backgroundColor: this.state.bgColor
        };

        return (
            <>
                <section className="sectionHeader">
                    <div className="container">
                        <h2>Our Blog</h2>
                        <p>This is news section</p>
                    </div>
                </section>


                <div className="container">
                <div className="colorArea py-5">
                    <div style={squareStyle} className="colorSquare"></div>

                    <form onSubmit={this.setNewColor}>
                        <input onChange={this.colorValue} placeholder="Enter a color value" /> 
                        <button type="submit">Go</button>
                    </form>
                </div></div>

            </>
        );
    }
}



export default News;