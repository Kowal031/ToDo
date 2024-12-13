import { Stack, Switch, Typography } from "@mui/material";
import { FC } from "react";
import { useLanguage } from "../context/LanguageContext";
import { LanguageEnum } from "../translation/translations-helpers";
import { useTranslation } from "../utils/use-translations";

const switchColor = "#371079";

const LanguageSwitcher: FC = () => {
  const { language, handleChangeLanguage } = useLanguage();
  const t = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLanguage = event.target.checked
      ? LanguageEnum.pl
      : LanguageEnum.en;
    handleChangeLanguage(newLanguage);
  };

  const getTextColor = (lang: LanguageEnum) =>
    language === lang ? switchColor : "";

  return (
    <div className="language-switcher-container">
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center", height: "2rem" }}
      >
        <Typography
          sx={{ color: getTextColor(LanguageEnum.en), fontWeight: "bold" }}
        >
          {t("SWITCH.ENGLISH")}
        </Typography>

        <Switch
          checked={language === LanguageEnum.pl}
          onChange={handleLanguageChange}
          inputProps={{ "aria-label": "language-switch" }}
          sx={{
            "& .MuiSwitch-thumb": {
              backgroundColor: `${switchColor} `,
            },
            "& .MuiSwitch-track": {
              backgroundColor: `${switchColor} `,
            },
            ".MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
              backgroundColor: switchColor,
            },
          }}
        />

        <Typography
          sx={{ color: getTextColor(LanguageEnum.pl), fontWeight: "bold" }}
        >
          {t("SWITCH.POLISH")}
        </Typography>
      </Stack>
    </div>
  );
};

export default LanguageSwitcher;
