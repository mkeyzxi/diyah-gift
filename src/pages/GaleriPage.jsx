import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import HeaderNavLayout from '../components/Layouts/HeaderNavLayout';
import SkeletonLoading from '../components/Layouts/SkeletonLoading';
const CardProductLayout = lazy(() => import('../components/Layouts/CardProductLayout'));
import useScroll from '../components/Hooks/useScroll';


const GaleriPage = () => {
    const [titleHeaderState, setTitleHeaderState] = useState('semua');
    const [dataProducts, setDataProducts] = useState([]);
    const hasFetched = useRef(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 18;

    const headForTitle = useRef(document.querySelector('title'));
    headForTitle.current.text = 'Galery | diyah.gift';

    // untuk scroll ketika pertama kali di load
    const scrollToTop = useScroll();
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!hasFetched.current) {
                    const cached = localStorage.getItem('products_cache');
                    if (cached) {
                        setDataProducts(JSON.parse(cached));
                        hasFetched.current = true;
                        return;
                    }

                    const response = await fetch('/products.json');
                    const { products } = await response.json();
                    setDataProducts(products);
                    localStorage.setItem('products_cache', JSON.stringify(products));
                    hasFetched.current = true;
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
        scrollToTop;

    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [titleHeaderState]);

    const filteredProducts = dataProducts.filter(
        product => titleHeaderState === 'semua' || product.type === titleHeaderState
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="container mx-auto justify-center items-center space-y-16 md:space-y-10 px-2 md:px-20 mt-20">
            <HeaderNavLayout headerTitle={`Menampilkan ${titleHeaderState.replace(/^./, c => c.toUpperCase())}`}>
                {["semua", "selempang", "buket", "lainnya"].map((type) => (
                    <span
                        key={type}
                        className={`text-[var(--pinkSecondary)] cursor-pointer transition-all rounded-xs border-t-[4px] border-b-[4px] border-transparent ${titleHeaderState === type ? '!border-[var(--yellow)]' : ''}`}
                        onClick={() => setTitleHeaderState(type)}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                ))}
            </HeaderNavLayout>

            {dataProducts.length === 0 ? (
                // <div className="text-center animate-pulse">Loading produk...</div>
                <SkeletonLoading />
            ) : (
                <Suspense fallback={<div className="text-center animate-pulse"><SkeletonLoading /></div>}>
                    <div className="flex flex-wrap gap-3 md:gap-5 justify-center items-center">
                        {currentItems.map((e, i) => (
                            <CardProductLayout
                                key={i}
                                path={e.path_img}
                                title={e.title}
                                price={e.price}
                                category={e.type}
                            />
                        ))}
                    </div>
                </Suspense>
            )}

            {totalPages > 1 && (
                <div className="flex justify-center mt-8 gap-2 flex-wrap">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded text-sm font-medium border ${currentPage === index + 1
                                    ? 'bg-yellow-500 text-white'
                                    : 'bg-white text-gray-700 border-gray-300'
                                } hover:bg-yellow-400 transition`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GaleriPage;
