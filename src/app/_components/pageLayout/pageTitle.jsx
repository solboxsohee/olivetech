'use client';
import React from 'react';

export default function PageTitle({ MainTitle, MainBoldTitle, BlueTitle }) {
    return (
        <article className="main-content">
            <span className="page-BlueTitle">{BlueTitle}</span>
            <h1 className="page-MainTitle">
                {MainTitle}
                <br />
                <b>{MainBoldTitle}</b>
            </h1>
        </article>
    );
}
