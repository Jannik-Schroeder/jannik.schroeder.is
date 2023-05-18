import Welcome from '@/components/welcome'
import About from '@/components/about'
import Technologies from "@/components/technologies";


export default function Home() {
        return (
            <div className="bg-primary text-primary min-h-screen">
                <section>
                    <Welcome/>
                </section>
                <section>
                    <About/>
                </section>
                <section className="space-y-4">
                    <Technologies/>
                </section>
            </div>
        )
    }
