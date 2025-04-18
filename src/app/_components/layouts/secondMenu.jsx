import React from 'react';
import Link from 'next/link';

export default function SecondMenu({ menuName, links, border = true }) {
    return (
        <div
            className="second-menu-box"
            style={border ? { borderBottom: '1px solid #e8e7e7' } : {}}
        >
            <article className="second-menu-wrap">
                <section className="second-menu">
                    <h1>{menuName}</h1>
                </section>
                <section className="second-small-menu">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href}>
                            {link.name}
                        </Link>
                    ))}
                </section>
            </article>
        </div>
    );
}
