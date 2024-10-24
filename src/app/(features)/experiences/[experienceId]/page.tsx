import React from "react";

export default function ExperienceDetail({
    params
}: {
    params: { experienceId: string }
}) {
    return (
        <h1>Discussion Title {params.experienceId}</h1>
    )
}