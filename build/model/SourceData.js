/**
 * create by liteng on 2020-07-03
 */
'use strict';
exports.__esModule = true;
exports.TableType = exports.ListType = exports.DecorateType = void 0;
var DecorateType;
(function (DecorateType) {
    DecorateType["bold"] = "bold";
    DecorateType["italic"] = "italic";
    DecorateType["superscript"] = "superscript";
    DecorateType["subscript"] = "subscript";
    DecorateType["underline"] = "underline";
})(DecorateType || (DecorateType = {}));
exports.DecorateType = DecorateType;
var ReferenceType;
(function (ReferenceType) {
    ReferenceType["citation"] = "citation";
    ReferenceType["table"] = "table";
    ReferenceType["image"] = "image";
    ReferenceType["formula"] = "formula";
    ReferenceType["appendix"] = "appendix";
})(ReferenceType || (ReferenceType = {}));
var ListType;
(function (ListType) {
    ListType["bullet"] = "bullet";
    ListType["ordered"] = "ordered";
})(ListType || (ListType = {}));
exports.ListType = ListType;
var TableType;
(function (TableType) {
    TableType["simpleTable"] = "simpleTable";
    TableType["complexTable"] = "complexTable"; //only have a picture of the table
})(TableType || (TableType = {}));
exports.TableType = TableType;
