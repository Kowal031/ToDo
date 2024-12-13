import { flatten } from "flat";
import { MessageFormatElement } from "react-intl";

import { english } from "./en";
import { polish } from "./pl";

export const translations: Record<
  string,
  Record<string, string> | Record<string, MessageFormatElement[]>
> = {
  en: flatten(english),
  pl: flatten(polish),
};
