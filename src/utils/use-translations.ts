import { useCallback } from "react";
import { useIntl } from "react-intl";

type TranslationVariables = {
  [key in string]: string | number;
};

export const useTranslation = () => {
  const { formatMessage } = useIntl();

  return useCallback(
    (id: string, variables: TranslationVariables = {}) => {
      return formatMessage({ id }, variables);
    },

    [formatMessage]
  );
};
