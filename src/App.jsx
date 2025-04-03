import { Navbar } from '@/components/layout/Navbar.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Index } from '@/pages/Index.jsx'
import { Resume } from '@/pages/Resume.jsx'
import { Autobiography } from '@/pages/Autobiography.jsx'
import { Diplomas } from '@/pages/Diplomas.jsx'

export const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route key="/" path="/" element={<Index />} />
				<Route key="/resume" path="/resume" element={<Resume />} />
				<Route
					key="/autobiography"
					path="/autobiography"
					element={<Autobiography />}
				/>
				<Route key="/diplomas" path="/diplomas" element={<Diplomas />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</>
	)
}
