'use client'

import AlbumSlider from "./AlbumSlider"

import SectionHeader from '../SectionHeader';

const Albums = () => {
    return <section id='discography'>
        <div className="container mx-auto">
            <SectionHeader pretitle='Discography' title='Popular Albums' />
            <div>
                <AlbumSlider />
            </div>
        </div>
    </section>
}

export default Albums