import Navigasi from "../UI/Navigasi";
const HeaderNavLayout = () => {
	return (
		<div className="flex items-center justify-between px-6 py-4 flex-col md:flex-row flex-wrap gap-3">
			<div>
				<h1 className="text-xl font-medium text-gray-900">Menampilkan Semua</h1>
			</div>

			<ul className="flex items-center space-x-5 flex-wrap justify-center">
				<li className="">
				<Navigasi name="Lainnya" addClass=""/>
				</li>
				<li>
				<Navigasi name="Lainnya" addClass=""/>
				</li>
				<li>
				<Navigasi name="Lainnya" addClass=""/>
				</li>
				<li>
					<Navigasi name="Lainnya" addClass=""/>
				</li>
			</ul>
		</div>
	);
};

export default HeaderNavLayout;
