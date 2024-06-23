"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var plugin_cloud_1 = require("@payloadcms/plugin-cloud");
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var config_1 = require("payload/config");
var Users_1 = __importDefault(require("./collections/Users"));
var Sectors_1 = __importDefault(require("./collections/Sectors"));
var MapPoints_1 = __importDefault(require("./collections/MapPoints"));
var Calendars_1 = __importDefault(require("./collections/Calendars"));
exports.default = (0, config_1.buildConfig)({
    admin: {
        user: Users_1.default.slug,
        bundler: (0, bundler_webpack_1.webpackBundler)(),
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    collections: [Users_1.default, Sectors_1.default, MapPoints_1.default, Calendars_1.default],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, 'generated-schema.graphql'),
    },
    plugins: [(0, plugin_cloud_1.payloadCloud)()],
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.DATABASE_URI,
    }),
});
