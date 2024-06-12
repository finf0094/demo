import React, { useRef } from 'react';
import { Header } from '@/layout/header/Header';
import { Footer } from '@/layout/footer/Footer';
import { Welcome } from '@/components/Welcome/Welcome';
import { MuseumList } from '@/components/MuseumList/MuseumList';
import { ContactUs } from '@/components/ContactUs/ContactUs';
import { AboutUs } from '@/components/AboutUs/AboutUs';
import { InfoTabs } from '@/components/TabsInfo/TabsInfo';
import { Map } from '@/components/Map/Map';
import { ParallaxSection } from '@/components/ParallaxSection/ParallaxSection';
import { ScrollProgress } from '@/components/ScrollProgpress/ScrollProgress';

export function HomePage() {
    const museumRefs = Array.from({ length: 1 }, () => useRef<HTMLDivElement>(null));
    const contactRef = useRef<HTMLDivElement>(null);
    const infoTabsRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Header museumRefs={museumRefs} contactRef={contactRef} infoTabsRef={infoTabsRef} />
            <div style={{ paddingTop: '56px' }}>
                <div id="main">
                    <Welcome />
                </div>
                <div id="about-us">
                    <AboutUs />
                </div>
                <ParallaxSection></ParallaxSection>
                <div id="museum-list" ref={museumRefs[0]}>
                    <MuseumList />
                </div>
                <div id="contact-us" ref={contactRef}>
                    <ContactUs />
                </div>
                <div id="info-tabs" ref={infoTabsRef}>
                    <InfoTabs />
                </div>
                <div id="map">
                    <Map />
                </div>
            </div>
            <Footer />
        </>
    );
}
