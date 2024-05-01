import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { SearchCar } from './pages/SearchCar';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
