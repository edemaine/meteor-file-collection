/***************************************************************************
###     Copyright (C) 2014-2017 by Vaughn Iverson
###     fileCollection is free software released under the MIT/X11 license.
###     See included LICENSE file for details.
***************************************************************************/

var currentVersion = '1.3.10';

Package.describe({
  summary: 'Collections that efficiently store files using MongoDB GridFS (noncoffee version)',
  name: 'edemaine:file-collection',
  version: currentVersion,
  git: 'https://github.com/edemaine/meteor-file-collection.git'
});

Npm.depends({
  mongodb: '3.1.13',
  'gridfs-locking-stream': '1.1.1',
  'gridfs-locks': '1.3.4',
  dicer: '0.2.5',
  async: '2.1.4',
  express: '4.14.1',
  'cookie-parser': '1.4.3',
  // Version 2.x of through2 is Streams3, so don't go there yet!
  through2: '0.6.5'
});

Package.onUse(function(api) {
  api.use('ecmascript@0.9.0');
  api.use('webapp@1.3.13', 'server');
  api.use('mongo@1.1.15', ['server', 'client']);
  api.use('minimongo@1.0.20', 'server');
  api.use('check@1.2.5', ['server', 'client']);
  api.addFiles('resumable/resumable.js', 'client');
  api.addFiles('src/gridFS.js', ['server','client']);
  api.addFiles('src/server_shared.js', 'server');
  api.addFiles('src/gridFS_server.js', 'server');
  api.addFiles('src/resumable_server.js', 'server');
  api.addFiles('src/http_access_server.js', 'server');
  api.addFiles('src/resumable_client.js', 'client');
  api.addFiles('src/gridFS_client.js', 'client');
  api.addFiles('src/share.js');
  api.export('FileCollection');
  api.export('Resumable', 'client');
});

Package.onTest(function (api) {
  api.use('edemaine:file-collection@' + currentVersion, ['server', 'client']);
  api.use('ecmascript@0.9.0');
  api.use('tinytest@1.0.12', ['server', 'client']);
  api.use('test-helpers@1.0.11', ['server','client']);
  api.use('http@1.2.11', ['server','client']);
  api.use('ejson@1.0.13',['server','client']);
  api.use('mongo@1.1.15', ['server', 'client']);
  api.use('check@1.2.5', ['server', 'client']);
  api.use('tracker@1.1.2', 'client');
  api.addFiles('test/file_collection_tests.js', ['server', 'client']);
});
