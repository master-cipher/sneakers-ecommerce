function App() {
	return (
		<div className='wrapper clear'>
			<header className='d-flex justify-between p-40'>
				<div className='headerLeft d-flex align-center'>
					<img
						src='/images/logo.png'
						width='40'
						height='40'
						alt='Logo'
						className='mr-15'
					/>
					<div>
						<h3 className='text-uppercase'>React Sneakers</h3>
						<p className='opacity-5'>The best sneakers ever!</p>
					</div>
				</div>
				<ul className='d-flex align-center'>
					<li className='mr-30 d-flex align-center'>
						<img
							src='images/cart.svg'
							width='18'
							height='18'
							alt='cart'
							className='mr-15'
						/>
						<span>1205 руб.</span>
					</li>
					<li className='d-flex align-center justify-center'>
						<img
							src='images/user.svg'
							width='18'
							height='18'
							alt='user'
						/>
					</li>
				</ul>
			</header>
			<div className='content p-40'>
				<h1>All Sneakers</h1>
				<div className='sneakers d-flex'>
					<div className='cart'>
						<img
							className='center'
							src='images/sneakers/1.jpg'
							alt='Sneakers'
							width={133}
							height={112}
						/>
						<h5>Male Sneakers Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-around align-center'>
							<div className='d-flex flex-column'>
								<span>Price: </span>
								<b>12,999 rub.</b>
							</div>
							<button className='button'>
								<svg
									width='12'
									height='12'
									viewBox='0 0 12 12'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M10.6653 5.13122H7.20212V1.66821C7.20212 0.332846 5.13112 0.332846 5.13112 1.66821V5.13122H1.66799C0.33292 5.13122 0.33292 7.20215 1.66799 7.20215H5.13112V10.6652C5.13112 12.0005 7.20212 12.0005 7.20212 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
										fill='#D3D3D3'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
