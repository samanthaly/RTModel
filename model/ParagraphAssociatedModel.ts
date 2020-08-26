/**
 * create by liteng on 2020-08-03
 */
'use strict';
import {DecorateType} from './SourceData';

interface TextFragment {
  value: string;
  decorates: Array<DecorateType>
}

export {
  TextFragment,
};