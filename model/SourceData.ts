/**
 * create by liteng on 2020-07-03
 */
'use strict';
import {Image} from './Image';
import {Formula, FormulaInContent, ImageFormula} from './Formula';
import {TableWithData, TableWithImage, TableInParagraph} from './Table';
import Reference from './Reference';

interface NameType {
  chineseName?: string;
  englishName?: string;
}
enum DecorateType {
  bold = 'bold',
  italic = 'italic',
  superscript = 'superscript',
  subscript = 'subscript',
  underline = 'underline'
}
enum ReferenceType {
  citation = 'citation',
  table = 'table',
  image = 'image',
  formula = 'formula',
  appendix = 'appendix',
}
enum ListType {
  bullet = 'bullet',
  ordered = 'ordered'
}
interface Decorate {
  pos: number;
  length: number;
  type: Array<DecorateType>;
}
interface FootnoteInContent {
  pos: number;
  id: string;
}
interface Footnote {
  id: string;
  text: string;
}
interface ContentReference {
  pos: number;
  id: string;
  type: ReferenceType;
}
interface BaseParagraph {
  paragraph: string;
  text?: string;
}
interface BaseParagraphWithDecorates extends BaseParagraph {
  decorates: Array<Decorate>;
}
interface Paragraph extends BaseParagraphWithDecorates {
  refs: Array<ContentReference>;
  footnotes: Array<FootnoteInContent>;
  comment?: string;
}
interface Quote {
  text: string;
  refs: Array<ContentReference>;
  decorates: Array<Decorate>;
  footnotes: Array<FootnoteInContent>;
}
interface ListItem {
  text: string;
  type: ListType;
  refs: Array<ContentReference>;
  decorates: Array<Decorate>;
  footnotes: Array<FootnoteInContent>;
  formulas?: Array<{pos: number; id: string}>;
}

interface Section {
  preParagraphs: Array<Paragraph |
  {quote: Quote, comment?: string} |
  {list: ListItem, comment?: string} |
  {image: Image, comment?: string} |
  {formula: FormulaInContent | ImageFormula, comment?: string} |
  {table: TableInParagraph, comment?: string}>;
  sections: Partial<Section>[];
  decorates?: Array<Decorate>;
  comment?: string;
  name?: string;
}

interface Content {
  preParagraphs: Array<Section>;
  chapters: Array<Section>;
}

interface SourceDataWithoutReferences {
  title: {
    chineseName?: string;
    englishName?: string;
    decorates?: {chinese: Array<Decorate>; english: Array<Decorate>};
  };
  createdAt: number;
  lastModified: number;
  author: NameType;
  school: {department: NameType; major: NameType; classGroup: NameType; studentID: string};
  mentor: {name: NameType; schoolTitle: string};
  abstract: {
    chinese: {paragraphs: Array<Paragraph>};
    english: {paragraphs: Array<Paragraph>};
    keywords: Array<NameType>;
  },
  acknowledgement: Array<string>;
  content: Content;
  image: Array<Image>;
  formula: Array<Formula | ImageFormula>
  table: Array<TableWithData | TableWithImage>;
  footnote: Array<Footnote>;
}
interface SourceDataOfOldThesis extends SourceDataWithoutReferences {
  allReferences: Array<Reference>;
}
interface SourceDataWithProcessedReferences extends SourceDataWithoutReferences {
  reference: Array<BaseParagraphWithDecorates>
}

export {
  SourceDataWithoutReferences,
  SourceDataOfOldThesis,
  SourceDataWithProcessedReferences,
  Content,
  Section,
  Decorate,
  Paragraph,
  BaseParagraphWithDecorates,
  DecorateType,
  Quote,
  ListItem,
  ListType,
  Footnote,
  FootnoteInContent,
  ReferenceType,
  ContentReference,
};