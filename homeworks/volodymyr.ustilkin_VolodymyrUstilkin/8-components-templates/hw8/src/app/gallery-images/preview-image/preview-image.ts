import {IPreviewImage} from "./ipreview-image";

export class PreviewImage implements IPreviewImage{
  id: number;
  smallUrl: string;
  fullUrl: string;
  isSelected: boolean;
  showFullImage: boolean = false;
  previewLoaded = false;
  fullLoaded = false;
}
