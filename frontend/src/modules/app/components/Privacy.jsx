import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Privacy = () => {
    const lang = localStorage.getItem('locale');
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(`/privacy/${lang}.md`)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, []);

    return (
        <div className="row justify-content-center mx-2" style={{ textAlign: 'justify' }}>
            <div className='col-md-8 col-lg-6'>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Privacy;