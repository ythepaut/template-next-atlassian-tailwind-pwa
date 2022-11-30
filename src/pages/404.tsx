import EmptyState from "@atlaskit/empty-state";
import Button from "@atlaskit/button/standard-button";
import React from "react";
import {GetStaticProps} from "next";
import {useTranslations} from "use-intl";

export default function Error404Page(): JSX.Element {

    const t = useTranslations("error");

    const goBack = () => window.history.back();

    return (
        <EmptyState
            header={t("404.title")}
            description={t("404.description")}
            primaryAction={<Button appearance="link" onClick={goBack}>{t("back")}</Button>}
            imageUrl={"/assets/images/404.png"}
        />
    );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`),
        },
    };
};
