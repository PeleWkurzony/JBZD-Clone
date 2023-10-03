import { Link } from 'react-router-dom';

export const Footer = () => {

    const links = [
        {
            path: '/terms-of-service',
            text: 'Regulamin'
        },
        {
            path: '/contact',
            text: 'Kontakt'
        },
        {
            path: '/privacy-policy',
            text: 'Polityka prywatności'
        },
        {
            path: '/changelog',
            text: 'Dziennik zmian'
        },
        {
            path: '/faq',
            text: 'FAQ'
        }
    ]

    return (
        <div className="footer d-flex justify-content-center py-3">
            { links.map(link_ref => 
                <Link className="footer-link mx-2" key={link_ref.path} to={link_ref.path}> {link_ref.text} </Link>
            )}
        </div>
    )
}