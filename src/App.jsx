import { Navbar } from '@/components/layout/Navbar.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Index } from '@/pages/Index.jsx'
import { Skills } from '@/pages/Skills.jsx'
import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

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
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    )
}
