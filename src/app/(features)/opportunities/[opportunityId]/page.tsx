import React from "react";

export default function OpportunityDetail({
    params
}: {
    params: { opportunityId: string}
}) {
    return (
        <h1>Opportunity {params.opportunityId}</h1>
    )
}