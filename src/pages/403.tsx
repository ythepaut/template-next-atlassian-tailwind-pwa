import {NextPage} from "next";
import EmptyState from "@atlaskit/empty-state";
import Button from "@atlaskit/button/standard-button";
import React from "react";
import {useTranslations} from "use-intl";

const Error403Page: NextPage = () => {

    const t = useTranslations("error");

    const goBack = () => window.history.back();

    return (
        <EmptyState
            header={t("404.title")}
            description={t("404.description")}
            primaryAction={<Button appearance="link" onClick={goBack}>{t("back")}</Button>}
            imageUrl={"/assets/images/403.png"}
        />
    );
};

export default Error403Page;
