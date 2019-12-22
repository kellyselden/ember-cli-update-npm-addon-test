'use strict';

module.exports = {
  normalizeEntityName() {},

  locals() {
    return {
      addonVersion: require('../../package').version
    };
  }
};
