const useScroll = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	
	scrollToTop();
}

export default useScroll;