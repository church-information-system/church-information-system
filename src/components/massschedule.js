import React from 'react';

// PAGES LAYOUT
import MassSched from './masssched';
import Header from './layout/header';
import Footer from './layout/footer';

export default function MassScheduleMain () {
    return (
        <div>
            <Header />
            <MassSched/>
            <Footer />
        </div>

    )
}
