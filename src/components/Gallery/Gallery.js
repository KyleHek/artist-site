import ArtCard from "../ArtCard/ArtCard"

export default function Gallery() {
    return (
        <div className="grid gap-4 px-4 py-4 lg:grid-cols-3">
            <ArtCard />
            <ArtCard />
            <ArtCard />
            <ArtCard />
            <ArtCard />
        </div>
    )
}

// import { useEffect, useState } from 'react';
// import ArtCard from './ArtCard'; // Import your ArtCard component

// export default function Gallery() {
//     const [artData, setArtData] = useState([]);

//     useEffect(() => {
//         // Fetch data from Contentful CMS or any other data source
//         // For demonstration, let's assume fetchedData is an array of art objects
//         const fetchedData = [
//             { id: 1, title: 'Artwork 1', imageUrl: 'url/to/image1.jpg' },
//             { id: 2, title: 'Artwork 2', imageUrl: 'url/to/image2.jpg' },
//             { id: 3, title: 'Artwork 3', imageUrl: 'url/to/image3.jpg' },
//             // Add more objects as needed
//         ];

//         setArtData(fetchedData);
//     }, []);

//     return (
//         <div className="grid gap-4 px-4 py-4 lg:grid-cols-3">
//             {artData.map(art => (
//                 <ArtCard key={art.id} title={art.title} imageUrl={art.imageUrl} />
//             ))}
//         </div>
//     );
// }