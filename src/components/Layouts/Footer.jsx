// export default function Footer() {
// 	return (
// 		<footer className="bg-white pt-12 pb-8 px-6 border-t">
// 			<div className="max-w-7xl mx-auto">
// 				<div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-8">
// 					{/* Logo and Description */}
// 					<div className="space-y-4">
// 						<img
// 							src="../image/LogoFooter.png"
// 							alt="Diyah Gift Logo"
// 							className="h-12 w-auto"
// 						/>
// 						<p className="text-gray-600 max-w-sm">
// 							Hadiah istimewa untuk momen tak terlupakan.
// 						</p>
// 					</div>

// 					{/* Navigation Links */}
// 					<div>
// 						<h3 className="font-semibold text-gray-900 mb-4">Menu</h3>
// 						<ul className="space-y-3">
// 							<li>
// 								<a href="/" className="text-gray-600 hover:text-rose-500">
// 									Beranda
// 								</a>
// 							</li>
// 							<li>
// 								<a
// 									href="/products"
// 									className="text-gray-600 hover:text-rose-500"
// 								>
// 									Produk
// 								</a>
// 							</li>
// 							<li>
// 								<a
// 									href="/contact"
// 									className="text-gray-600 hover:text-rose-500"
// 								>
// 									Kontak
// 								</a>
// 							</li>
// 						</ul>
// 					</div>

// 					{/* Social Media Links */}
// 					<div>
// 						<h3 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h3>
// 						<ul className="space-y-3">
// 							<li>
// 								<a
// 									href="https://wa.me/0853422442"
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="flex items-center text-gray-600 hover:text-rose-500"
// 								>
// 									<svg
// 										className="w-5 h-5 mr-2"
// 										fill="currentColor"
// 										viewBox="0 0 24 24"
// 									>
// 										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
// 									</svg>
// 									0853422442
// 								</a>
// 							</li>
// 							<li>
// 								<a
// 									href="https://instagram.com/diyah.gift"
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="flex items-center text-gray-600 hover:text-rose-500"
// 								>
// 									<svg
// 										className="w-5 h-5 mr-2"
// 										fill="currentColor"
// 										viewBox="0 0 24 24"
// 									>
// 										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
// 									</svg>
// 									@diyah.gift
// 								</a>
// 							</li>
// 							<li>
// 								<a
// 									href="https://facebook.com/diyahgift"
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="flex items-center text-gray-600 hover:text-rose-500"
// 								>
// 									<svg
// 										className="w-5 h-5 mr-2"
// 										fill="currentColor"
// 										viewBox="0 0 24 24"
// 									>
// 										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
// 									</svg>
// 									diyahgift
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>

// 				{/* Copyright */}
// 				<div className="mt-12 pt-8 border-t border-gray-200">
// 					<p className="text-center text-gray-500 text-sm">
// 						© {new Date().getFullYear()} Diyah Gift. All rights reserved.
// 					</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }

// import { Link } from "react-router"

// const Footer = () => {
//   return (
// 	<footer className="bg-[var(--pinkBackground)] py-12">
// 	<div className="container mx-auto px-4">
// 	  <div className="flex flex-wrap gap-8 lg:gap-10 md:gap-6 sm:gap-4">
// 		{/* Brand Section */}
// 		<div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
// 		  <div className="flex items-center gap-2 mb-4">
// 			<img src="../image/LogoFooter.png" alt="Diyah Gift Logo" className="w-24 h-auto" />
// 		  </div>
// 		  <p className="text-[var(--blackCustom)] text-sm font-light">
// 			Hadiah istimewa untuk momen tak terlupakan.
// 		  </p>
// 		</div>

// 		{/* Navigation Section */}
// 		<div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
// 		  <h3 className="font-semibold text-[var(--blackCustom)] mb-4 text-lg">Navigasi</h3>
// 		  <ul className="space-y-2">
// 			<li>
// 			  <Link to="/" className="text-[var(--blackCustom)] hover:text-gray-900 transition-colors duration-200 text-sm font-light">
// 				Beranda
// 			  </Link>
// 			</li>
// 			<li>
// 			  <Link to="/produk" className="text-[var(--blackCustom)] hover:text-gray-900 transition-colors duration-200 text-sm font-light">
// 				Produk
// 			  </Link>
// 			</li>
// 			<li>
// 			  <Link to="/kontak" className="text-[var(--blackCustom)] hover:text-gray-900 transition-colors duration-200 text-sm font-light">
// 				Kontak
// 			  </Link>
// 			</li>
// 		  </ul>
// 		</div>

// 		{/* Location Section */}
// 		<div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
// 		  <h3 className="font-semibold text-[var(--blackCustom)] mb-4 text-lg">Lokasi</h3>
// 		  <div className="w-full h-40 rounded-lg overflow-hidden">
// 			<iframe
// 			  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958338.9214507842!2d117.89410405015046!3d-3.945207056631876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d92d980c849b65f%3A0x76c67044b211dc8d!2sDiyah%20Gift!5e1!3m2!1sen!2sid!4v1738430431062!5m2!1sen!2sid"
// 			  width="100%"
// 			  height="100%"
// 			  style={{ border: 0 }}
// 			  allowFullScreen=""
// 			  loading="lazy"
// 			  referrerPolicy="no-referrer-when-downgrade"
// 			></iframe>
// 		  </div>
// 		</div>

// 		{/* Social Media Section */}
// 		<div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
// 		  <h3 className="font-semibold text-[var(--blackCustom)] mb-4 text-lg">Ikuti Kami</h3>
// 		  <div className="space-y-3">
// 			<a
// 			  href="tel:+6285342181132"
// 			  className="flex items-center gap-2 text-[var(--blackCustom)] hover:text-gray-900 transition-colors duration-200 text-sm font-light"
// 			>
// 			  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// 				<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
// 			  </svg>
// 			  +62 853-4218-1132
// 			</a>
// 			<a
// 			  href="https://facebook.com/diyah.gift"
// 			  className="flex items-center gap-2 text-[var(--blackCustom)] hover:text-gray-900 transition-colors duration-200 text-sm font-light"
// 			>
// 			  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
// 				<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
// 			  </svg>
// 			  diyah.gift
// 			</a>
// 			<a
// 			  href="https://instagram.com/diyah.gift"
// 			  className="flex items-center gap-2 text-[var(--blackCustom)] hover:text-gray-900 transition-colors duration-200 text-sm font-light"
// 			>
// 			  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
// 				<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
// 			  </svg>
// 			  @diyah.gift
// 			</a>
// 		  </div>
// 		</div>
// 	  </div>

// 	  {/* Copyright Section */}
// 	  <div className="mt-8 pt-8 border-t border-gray-300">
// 		<p className="text-center text-[var(--blackCustom)] text-sm font-light">
// 		  © 2025 Diyah Gift. All Rights Reserved.
// 		</p>
// 	  </div>
// 	</div>
//   </footer>
//   )
// }

// export default Footer

export default function Footer() {
	return (
		<footer className="w-screen bg-[var(--peachPuff)] border-t-4 border-t-[var(--blackCustom)] pt-8 md:pt-4 text-sm">
			<div className="max-w-7xl mx-auto px-6 flex justify-between  items-center">
				<div className="flex flex-wrap justify-between items-start md:items-center w-full">
					{/* Logo and Description */}
					<div className="w-[230px] mx-auto md:mx-0 p-2 md:order-1 overflow-clip order-3 ">
						<img
							src="../image/LogoFooter.png"
							alt="Diyah Gift Logo"
							width="100%"
							height="100%"
							className="shadow-custom leading-loose"
						/>
					</div>

					{/* Navigation Links */}
					<div className="w-1/2 md:w-1/4 mb-8 md:mb-0 md:order-2 order-1">
						<h3 className="font-light text-gray-900 mb-4">Menu</h3>
						<ul className="space-y-3">
							<li>
								<a href="/" className="text-gray-600 hover:text-rose-500">
									Beranda
								</a>
							</li>
							<li>
								<a
									href="/products"
									className="text-gray-600 hover:text-rose-500"
								>
									Produk
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="text-gray-600 hover:text-rose-500"
								>
									Kontak
								</a>
							</li>
						</ul>
					</div>

					{/* Social Media Links */}
					<div className="w-1/2 md:w-1/3 md:order-3 order-2">
						<h3 className="font-light text-gray-900 mb-4">Ikuti Kami</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="https://wa.me/6285342181132"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-gray-600 hover:text-green-500"
								>
									<svg
										className="w-5 h-5 mr-2"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
									</svg>
									0853422442
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/diyah.gift/?hl=en"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-gray-600 hover:text-rose-500 "
								>
									<svg
										className="w-5 h-5 mr-2"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
									</svg>
									@diyah.gift
								</a>
							</li>
							<li>
								<a
									href="https://facebook.com/diyahgift"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-gray-600 hover:text-blue-600"
								>
									<svg
										className="w-5 h-5 mr-2"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
									diyahgift
								</a>
							</li>
						</ul>
					</div>
				</div>

				
			</div>
			{/* Copyright */}
			<div className="mt-3 py-4 md:order-4 order-3 w-screen bg-[var(--blackCustom)]">
					<p className="text-center text-[var(--peachPuff)] text-xs md:text-md leading-none">
						{/* © {new Date().getFullYear()} Diyah Gift. All rights reserved. */}
						© 2025 Diyah Gift. All rights reserved.
					</p>
				</div>
		</footer>
	);
}
