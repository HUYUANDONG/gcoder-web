'use strict';
var gcoder = require('gcoder');

var FilterFilterPlugin = module.exports = gcoder.Plugin.extend({
    constructor: function () {
    }
});

FilterFilterPlugin.prototype.do = function (tables,config) {
    FilterFilterPlugin.__super__.do();
    let splitChat = config.splitChat || "_";
    let filterField = ["id","created_time","created_by","update_time","update_by"]
    for(let table of tables){
        for(let field of table.fieldArray){
            if(filterField.indexOf(field.fieldName)!=-1){
                field.ignore = true;
            }
            if(field.fieldName=="id"){
                field.sqIgnore = true;                
            }
        }
    }
};
