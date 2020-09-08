declare enum TableType {
    simpleTable = "simpleTable",
    complexTable = "complexTable"
}
interface TableContent {
    header: Array<string>;
    body: Array<Array<string>>;
}
interface TableWithData {
    id: string;
    caption: string;
    source: string;
    fileName?: string;
    imgFileName: string;
    data: TableContent;
}
interface TableWithImage {
    id: string;
    caption: string;
    source: string;
    fileName?: string;
    imgFileName: string;
    width?: number;
    height?: number;
}
interface TableInParagraph {
    id: string;
    caption: string;
    source: string;
    imgFileName: string;
    type?: TableType;
}
interface TableImageWithBase64 extends TableWithImage {
    base64: string;
}
export { TableWithData, TableWithImage, TableInParagraph, TableContent, TableImageWithBase64, TableType };
