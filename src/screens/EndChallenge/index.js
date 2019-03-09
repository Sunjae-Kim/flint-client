import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import Success from './Success';
import Failure from './Failure';
import sendRequest from '../../modules/sendRequest';

class EndChallenge extends React.Component {
  updateChallengeStateRequest = async state => {
    const { recentChallenge } = this.props;
    await sendRequest('put', `/api/challenges/updateChallengeState/${recentChallenge.id}/${state}`);
  };

  render() {
    const { recentChallenge, progress, refreshDashboard } = this.props;

    return progress === 1 ? (
      <Success
        recentChallenge={recentChallenge}
        updateChallengeStateRequest={this.updateChallengeStateRequest}
        refreshDashboard={refreshDashboard}
      />
    ) : (
      <Failure
        recentChallenge={recentChallenge}
        updateChallengeStateRequest={this.updateChallengeStateRequest}
        refreshDashboard={refreshDashboard}
      />
    );
  }
}

EndChallenge.propTypes = {
  recentChallenge: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  progress: PropTypes.number.isRequired,
  refreshDashboard: PropTypes.func.isRequired,
};

export default EndChallenge;