import { Filter } from 'lucide-react'
import '../../index.css'
import { useState } from 'react';

function Sort() {
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(prev => !prev)
    }

    return (
        <section className='sort'>
            <Filter onClick={toggleContent} className='sort-button' />
            {
                showContent && (
                    <div>
                        <ul>
                            <li>All</li>
                            <li>Africa</li>
                            <li>Europe</li>
                            <li>Asia</li>
                            <li>Americas</li>
                            <li>Oceania</li>
                            <li>Polar</li>
                            <li>Antarctica</li>
                        </ul>
                    </div>
                )
            }
        </section>
    )
}

export default Sort;