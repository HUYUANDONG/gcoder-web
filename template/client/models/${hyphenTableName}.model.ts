import {BaseModel} from "./base.model.ts";

export interface <%=table.upperCamelName%>Model extends BaseModel{
    <%table.fieldArray.filter(function(field){return !field.ignore}).forEach(function(field){%>
    /**
     * ${field.comment}
     */
    ${field.lowerCamelName}:${field.tsType};<%})%>
}