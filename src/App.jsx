import { Navbar } from '@/components/layout/Navbar.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Index } from '@/pages/Index.jsx'
import { Resume } from '@/pages/Resume.jsx'
import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { Projects } from './pages/Projects'
import { Contacts } from './pages/Contacts'

export const App = () => {
    const [particlesInit, setParticlesInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async engine => {
            await loadSlim(engine)
        }).then(() => setParticlesInit(true))
    }, [])

    return (
        <>
            {particlesInit && <Particles id="tsparticles" url="/assets/particles.json" />}
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    )
}
