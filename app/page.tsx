import Welcome from '@/components/welcome'
import About from '@/components/about'


export default function Home() {
        return (
            <div className="bg-primary text-primary min-h-screen">
                <section>
                    <Welcome/>
                </section>
                <section>
                    <About/>
                </section>
            </div>
        )
    }
