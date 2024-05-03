import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { SearchCar } from './pages/SearchCar';
import { Toaster } from 'react-hot-toast';
import CarsProvider from './contexts/CarsContext';

function App() {
	return (
		<>
			<CarsProvider>
				<Toaster />
				<Routes>
					<Route
						path='/*'
						element={<LandingPage />}
					/>
					<Route
						path='/cars'
						element={<SearchCar />}
					/>
				</Routes>
			</CarsProvider>
		</>
	);
}

export default App;
