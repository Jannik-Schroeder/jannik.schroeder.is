import Welcome from '@/components/welcome'
import About from '@/components/about'
import Technologies from "@/components/technologies";
import Timeline from "@/components/timeline";


export default function Home() {
        return (
            <div className="bg-primary text-primary min-h-screen">
                <section>
                    <Welcome/>
                </section>
                <section>
                    <About/>
                </section>
                <section>
                    <Technologies/>
                </section>
                <section>
                    <Timeline/>
                </section>
            </div>
        )
    }
