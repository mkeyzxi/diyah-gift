import Triangle from '../UI/Triangle';
import { useEffect, useState } from 'react';
const SalempangLayout = () => {
	const [triangleCount, setTriangleCount] = useState(0);
	const updateTriangle = () => {
		const width = window.innerWidth;
		if(width <= 640){
			setTriangleCount(10);	
		}else if(width > 640 && width <= 1024){
			setTriangleCount(25);	
		}else {
			setTriangleCount(50);	
		}
	}

	useEffect(() => {
        updateTriangle();
        window.addEventListener('resize', updateTriangle);
        return () => window.removeEventListener('resize', updateTriangle);
    }, []);
	
	return (
		<div className="w-full h-12 bg-[var(--yellow)] overflow-x-hidden border-t-5 border-[var(--blackCustom)] shadow-salempang">
			<div className="flex animate-righttoleft border-[var(--blackCustom)] ">
				{Array.from({ length: triangleCount }, (_, i) => (
					<Triangle key={i} addClass="hover:scale-115 transition-all"/>
				))}
			</div>
		</div>
	);
};

export default SalempangLayout;
