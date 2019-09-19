module.exports = {
  name: 'show-movies',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/show-movies',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
