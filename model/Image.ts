/**
 * create by liteng on 2020-08-17
 */
'use strict';

enum ImageSizeType {
  default = 'default',
  formula = 'formula'
}
interface Image {
  id: string;
  fileName: string;
  caption: string;
  subCaption?: string;
}
interface ImageSize {
  width: number;
  height: number;
}
interface ImageWithWidthAndHeight extends Image, ImageSize {}
interface ImageWithBase64 extends ImageWithWidthAndHeight {
  base64: string;
}

export {
  Image,
  ImageSize,
  ImageWithBase64,
  ImageWithWidthAndHeight,
  ImageSizeType
};