interface FormulaInContent {
    id: string;
    text: string;
}
interface Formula {
    id: string;
    formula: string;
    type: string;
}
interface ImageFormula {
    id: string;
    imageFileName: string;
    width: number;
    height: number;
}
interface ImageFormulaWithBase64 extends ImageFormula {
    base64: string;
}
interface FormulaWithOOXML extends Formula {
    ooxml: string;
}
export { Formula, FormulaInContent, ImageFormula, ImageFormulaWithBase64, FormulaWithOOXML, };
