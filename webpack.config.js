'use strict';

const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
	return {
		context: `${__dirname}/src`,
		entry: {
			app: './app.js'
		},
		output: {
			path: `${__dirname}/dist/asserts`,
			filename: '[name].bundle.js',
			publicPath: '/asserts'
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use:['babel-loader']
				},
				{
					test: /\.(html|svg|jpe?g|gif|ttf|woff2?)$/,
					use: {
							loader: 'file-loader',
							options: {
								name: '[name]-[hash:8].[ext]'
							}
						}
				},
				{
					test: /\.s?css$/,
					exclude: /node_modules/,
					use: ExtractTextPlugin.extract({
						use: 'css-loader'
					})
					/*
					[
						{ 
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
							options: {
								module: true,
								localIdentName: '[local]'
							}
						},
						{
							loader: 'sass-loader',
							options: {
								outputStyle: 'expanded',
								sourceMap: true,
								includePaths: [`${__dirname}/src`]
							}
						}
					]
					*/
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('styles.css')
		],
		devServer: {
			contentBase: __dirname + '/src',
			historyApiFallback: true,
			port: '8088',
			host: 'localhost',
			//hot: true
		}
	}
}