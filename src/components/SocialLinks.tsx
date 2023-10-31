import { FaYoutube, FaFacebook, FaInstagram} from 'react-icons/fa'
export const SocialLinks = () => {
    return (
        <section className="mt-5">
            <h3 className="text-2xl font-extrabold">Nos Réseaux sociaux</h3>
            <ul className="mt-3">
                <li className='flex items-center'><FaYoutube className='mr-3' /><a className="hover:text-[blue]" href="https://www.youtube.com/@IRTTV1">Youtube</a></li>
                <li className='flex items-center'><FaFacebook className='mr-3' /><a className="hover:text-[blue]" href="https://www.facebook.com/clubirt">Facebook</a></li>
                <li className='flex items-center'><FaInstagram className='mr-3' /><a className="hover:text-[blue]" href="https://www.instagram.com/irtfoot/?img_index=1">Instagram</a></li>
            </ul>
        </section>
    )
}