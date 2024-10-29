import React from "react";

export default function QuestionTopicDetail({
    params
}: {
    params: { questionTitle: string}
}) {
    return (
        <h1>Opportunity {params.questionTitle}</h1>
    )
}