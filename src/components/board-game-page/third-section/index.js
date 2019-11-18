import React from 'react';
import { connect } from 'react-redux';
import { addCommentAction } from "../../../actions/app";
import './third-section.css';

class ThirdSection extends React.Component {
    state = {
        name: '',
        comment: ''
    };

    render() {
        return (
            <div className='third-section'>
                <div className='third-section__content-wrapper'>
                <form  className='third-section__form'>
                   <div className='third-section__form-group'>
                    <label>Name:</label>
                       <input
                           onChange={ this.handleNameChange }
                           value={ this.state.name }
                           className='third-section__name-input' type='text'/>
                   </div>
                    <div className='third-section__form-group'>
                    <label>Comment:</label>
                <textarea onChange={ this.handleCommentChange }
                            value={ this.state.comment }
                    className='third-section__comment-area'></textarea>
                </div>
                    <div className="third-section__form-group">
                        <button
                            onClick={ this.handleButtonClick} className='third-section__button'>Send</button>
                    </div>
                </form>
                    <div className='third-section__comments-wrapper'>
                    { this.renderComments() }
                    </div>
            </div>
            </div>
        );
    }

    renderComments() {
        const { comments } = this.props
        return (
            comments.map( (comment)=> {
                return (
                    <div className='third-section__comment-wrapper'>
                        <h6>{ comment.name }</h6>
                        <p>{ comment.comment }</p>
                    </div>
                )
            })
        );
    }
    handleNameChange = (e) => {
        this.setState( {name: e.target.value} );
    }
    handleCommentChange = (e) => {
        this.setState( {comment: e.target.value} );
    }
    handleButtonClick = (e) => {
        e.preventDefault();

        this.props.addComment(this.state.name, this.state.comment);

        this.setState( {
            // comments: [ ...this.state.comments, {
            //     name: this.state.name,
            //     text: this.state.comment
            // }],
            name: '',
            comment: ''
        })
    }
}
function mapStateToProps(state) {
    return {
        comments: state.app.comments
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addComment: addCommentAction
    }
}

export default  connect(mapStateToProps, mapDispatchToProps())(ThirdSection);