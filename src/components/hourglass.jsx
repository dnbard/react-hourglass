import React, { Component } from 'react';
import "./hourglass.css";

class Hourglass extends Component{
    constructor(){
        super();

        this.state = {
            selectedElement: null,
            parents: [],
            childs: []
        };
    }

    componentDidMount(){
        if (!this.state.selectedElement){
            this.selectElement(this.props.data[0]);
        }
    }

    selectElement(el){
        const { data } = this.props;
        const childsSet = new Set(el.children);
        const parentsSet = new Set(el.parent);
        const childs = data.filter(d => childsSet.has(d.id));
        const parents = data.filter(d => parentsSet.has(d.id));

        this.setState({ selectedElement: el, childs, parents });
    }

    createPseudoElements(count=0){
        const result = [];

        for(let i = 0; i < count; i ++){
            result.push(<span key={ i } className="hourglass-pseudo"></span>);
        }

        return result;
    }

    render(){
        const { selectedElement, childs, parents } = this.state;
        const pseudoChildCount = childs.length - 1 > 0 ? childs.length - 1 : 0;
        const pseudoParentCount = parents.length - 1 > 0 ? parents.length - 1 : 0;

        if (!selectedElement){
            return null;
        }

        return <div className="hourglass">
            { parents.length > 0 && <div className="hourglass-parents">
                <div className="hourglass-wrapper">
                    { parents.map(c => <span key={ c.id } className="hourglass-parent" onClick={ this.selectElement.bind(this, c) }>
                        { c.title }
                    </span>) }
                </div>
                <div className="hourglass-childs__pseudo-top">
                    { !!pseudoParentCount && <div className="hourglass-childs__pseudo-htop">
                        { this.createPseudoElements(pseudoParentCount) }
                    </div> }
                </div>
            </div> }
            <div className="hourglass-selected">
                <div className="hourglass-selected__title">
                    { selectedElement.title }
                </div>
            </div>
            { childs.length > 0 && <div className="hourglass-childs">
                <div className="hourglass-childs__pseudo">
                    { !!pseudoChildCount && <div className="hourglass-childs__pseudo-h">
                        { this.createPseudoElements(pseudoChildCount) }
                    </div> }
                </div>
                <div className="hourglass-wrapper">
                    { childs.map(c => <span key={ c.id } className="hourglass-child" onClick={ this.selectElement.bind(this, c) }>
                        { c.title }
                    </span>) }
                </div>
            </div> }
        </div>;
    }
}

export default Hourglass;
