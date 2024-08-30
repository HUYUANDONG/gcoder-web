'use strict';
var gcoder = require('gcoder');

var MysqlTsTypeMapFilterPlugin = module.exports = gcoder.Plugin.extend({
    constructor: function () {
    }
});

MysqlTsTypeMapFilterPlugin.prototype.do = function (tables,config) {
    MysqlTsTypeMapFilterPlugin.__super__.do();
    let splitChat = config.splitChat || "_";
    let tsTypeMap = {
        "int":"number",
        "bigint":"string",
        "tinyint":"number",
        "smallint":"number",
        "decimal":"number",
        "int unsigned":"number",
        "varchar":"string",
        "float":"number",
        "double":"number",
        "date":"Date",
        "datetime":"Date",
        "text":"string",
        "char":"string",
    }
    let sqTypeMap = {
        "int":"NUMERIC",
        "bigint":"NUMERIC",
        "tinyint":"NUMERIC",
        "smallint": "NUMERIC",
        "decimal": "NUMERIC",
        "int unsigned":"NUMERIC",
        "varchar":"STRING",
        "float":"NUMERIC",
        "double":"NUMERIC",
        "date":"DATEONLY",
        "datetime":"DATE",
        "text":"STRING",
        "char":"STRING",
    }
    for(let table of tables){
        for (let field of table.fieldArray) {
             let fieldType = field.fieldType.toLowerCase()
            field.tsType = 'string';
            if(!field.tsType){
                console.log(`${fieldType} not map tsType`);
            }
            field.sqType = sqTypeMap[fieldType];
            if(!field.sqType){
                console.log(`${fieldType} not map sqType`);
            }
        }
    }
};
