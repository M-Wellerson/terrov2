import Link from 'next/link'

export default function Instagram({ color }) {
    return <Link href="https://www.instagram.com/terro_solovivo/">
        <a target="_blank" rel="noreferrer">
            <svg
                viewBox="0 0 31 30"
                width={30}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.081 21.176c-3.309 0-6.176-2.647-6.176-6.176 0-3.309 2.647-6.177 6.176-6.177 3.31 0 6.177 2.647 6.177 6.177 0 3.309-2.868 6.176-6.177 6.176Z"
                    fill={color} />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.581 0h-15C5.816.22 4.934.441 4.272.662c-.882.22-1.544.662-2.206 1.323-.523.524-.77 1.048-1.07 1.68-.079.167-.161.342-.253.526-.034.103-.074.21-.116.326-.23.63-.546 1.491-.546 2.983v15c.22 1.765.441 2.647.662 3.309.22.882.662 1.544 1.323 2.206.524.523 1.048.77 1.68 1.07.168.079.342.161.526.253.103.034.21.074.326.116.63.23 1.491.546 2.983.546h15c1.765-.22 2.647-.441 3.309-.662.882-.22 1.544-.662 2.206-1.323.523-.524.77-1.048 1.07-1.68.079-.168.161-.342.253-.526.034-.103.074-.21.116-.326.23-.63.546-1.491.546-2.983v-15c-.22-1.765-.441-2.647-.662-3.309-.22-.882-.662-1.544-1.323-2.206-.524-.523-1.048-.77-1.68-1.07-.167-.079-.342-.161-.526-.253-.102-.034-.21-.074-.326-.116C24.934.316 24.073 0 22.581 0Zm-7.5 5.515c-5.294 0-9.485 4.19-9.485 9.485 0 5.294 4.19 9.485 9.485 9.485 5.294 0 9.485-4.19 9.485-9.485 0-5.294-4.19-9.485-9.485-9.485Zm11.912-.22a2.206 2.206 0 1 1-4.412 0 2.206 2.206 0 0 1 4.412 0Z"
                    fill={color} />
            </svg>
        </a>
    </Link>
}