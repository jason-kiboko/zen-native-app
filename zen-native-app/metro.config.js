const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Reduce file watching
config.watchFolders = [__dirname];
config.resolver.blacklistRE = /node_modules\/.*\/node_modules/;

module.exports = config;