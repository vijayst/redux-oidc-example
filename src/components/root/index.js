import React from 'react';
import thunk from '../../thunk';
import { connect } from 'react-redux';

class Root extends React.Component {
  componentWillMount() {
    this.props.dispatch(thunk());
  }

  render() {
    return (
      <div style={styles.paper}>
        <div style={styles.content}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const styles = {
  paper: {
    padding: '1em',
    border: '1px solid black',
    display: 'flex',
    margin: '0 auto',
  },
  content: {
    padding: '1em',
    flex: '1 0 auto',
  }
}

export default connect(null, mapDispatchToProps)(Root);
