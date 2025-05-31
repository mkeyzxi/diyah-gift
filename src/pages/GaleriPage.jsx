import { useState, useEffect, useRef } from 'react';
import HeaderNavLayout from '../components/Layouts/HeaderNavLayout';
import CardProductLayout from '../components/Layouts/CardProductLayout';

const GaleriPage = () => {
    const [titleHeaderState, setTitleHeaderState] = useState('semua');
    const [dataProducts, setDataProducts] = useState([]);
    const hasFetched = useRef(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 18;

    // Fetch hanya sekali
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

    // Reset halaman ke 1 saat ganti kategori
    useEffect(() => {
        setCurrentPage(1);
    }, [titleHeaderState]);

    // Filter berdasarkan kategori aktif
    const filteredProducts = dataProducts.filter(
        product => titleHeaderState === "semua" || product.type === titleHeaderState
    );

    // Pagination
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

            {/* Produk ditampilkan */}
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

            {/* Pagination */}
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
