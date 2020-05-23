import React from "react"
import PropTypes from "prop-types"
class Note extends React.Component {
  render () {
    return (
      <React.Fragment>
        Status: {this.props.status}
        Conversation: {this.props.conversation}
        CreatedAt: {this.props.CreatedAt}
        UpdatedAt: {this.props.updatedAt}
      </React.Fragment>
    );
  }
}

Note.propTypes = {
  status: PropTypes.string,
  conversation: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};
export default Note
