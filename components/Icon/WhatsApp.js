import Link from 'next/link'

export default function WhatsApp({ color }) {
    return <Link href="https://api.whatsapp.com/send?phone=5511949181006">
        <a target="_blank" rel="noreferrer">
            <svg
                viewBox="0 0 30 30"
                width={30}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.273 27.939C9.545 29.313 12.273 30 15 30c8.41 0 15-6.87 15-14.886 0-4.122-1.364-7.786-4.318-10.763C22.727 1.603 19.09 0 15 0 6.818 0 0 6.87 0 15.114c0 2.749.682 5.497 2.273 8.016l.454.687-1.59 5.496 5.681-1.603.455.229ZM20 17.176c.455 0 2.727 1.145 3.182 1.374.07.035.141.065.211.095.38.161.733.312.925 1.279.227 0 .227.916-.227 2.06-.227.917-2.046 2.062-2.955 2.062-.154 0-.301.013-.459.027-.772.069-1.786.16-4.995-1.172-3.983-1.606-6.744-5.497-7.52-6.59-.11-.154-.18-.252-.207-.28-.04-.078-.117-.203-.22-.367-.503-.8-1.599-2.543-1.599-4.443 0-2.29 1.137-3.435 1.591-3.893.455-.458.91-.458 1.137-.458h.909c.227 0 .682 0 .909.687.454.916 1.364 3.206 1.364 3.435a.75.75 0 0 0 .05.23c.05.152.101.305-.05.457-.114.115-.171.23-.228.344a1.197 1.197 0 0 1-.227.343l-.682.687c-.227.23-.454.458-.227.916.227.459 1.136 2.062 2.5 3.207 1.534 1.352 2.745 1.89 3.359 2.162.113.05.206.092.277.128.455 0 .682 0 .91-.23.113-.228.397-.572.681-.915.284-.344.568-.687.682-.916.227-.458.454-.458.909-.23Z"
                    fill={color} />
            </svg>
        </a>
    </Link>
}