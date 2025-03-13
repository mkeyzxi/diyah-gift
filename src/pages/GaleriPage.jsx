import { useState, useEffect, useRef } from 'react';
import HeaderNavLayout from '../components/Layouts/HeaderNavLayout';
import CardProductLayout from '../components/Layouts/CardProductLayout';

const GaleriPage = () => {
    const [titleHeaderState, setTitleHeaderState] = useState('semua');
    const [dataProducts, setDataProducts] = useState([]);
    const hasFetched = useRef(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!hasFetched.current) {
                    const response = await fetch('/products.json');
                    const { products } = await response.json();
                    setDataProducts(products);
                    hasFetched.current = true;
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto justify-center items-center space-y-16 md:space-y-10 px-2 md:px-20 mt-20">
            {/* <HeaderNavLayout headerTitle={`Menampilkan ${titleHeaderState.charAt(0).toUpperCase() + titleHeaderState.slice(1).toLowerCase()}`}> */}
            <HeaderNavLayout headerTitle={`Menampilkan ${titleHeaderState.replace(/^./, c => c.toUpperCase())}`}>  
                <span className="text-[var(--pinkSecondary)] cursor-pointer" onClick={() => setTitleHeaderState('semua')}>Semua</span>
                <span className="text-[var(--pinkSecondary)] cursor-pointer" onClick={() => setTitleHeaderState('selempang')}>Selempang</span>
                <span className="text-[var(--pinkSecondary)] cursor-pointer" onClick={() => setTitleHeaderState('buket')}>Buket</span>
                <span className="text-[var(--pinkSecondary)] cursor-pointer" onClick={() => setTitleHeaderState('lainnya')}>Lainnya</span>
            </HeaderNavLayout>

            <div className="flex flex-wrap gap-3 md:gap-5 justify-center items-center">
            {dataProducts
                .filter(e => titleHeaderState === "semua" || e.type === titleHeaderState)
                .map((e, i) => (
                    <CardProductLayout
                        key={i}
                        path={e.path_img}
                        title={e.title}
                        price={e.price}
                        category={e.type}
                    />
                ))}
            </div>
        </div>
    );
};

export default GaleriPage;
