import IconProdTop from "../Icon/ProdTop"

export default function BannerCat({ img, name, colorTheme, colorFont }) {
    return <>
        <div
            className="bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url('${img}')`
            }}
        >
            <div
                className="flex items-center justify-items-start  lg:h-screen w-full pt-28"
            >
                <h1
                    className="block lg:px-[70px] text-6xl lg:text-[160px] text-Light-Orange font-Beastly font-normal"
                    style={{
                        color: colorTheme
                    }}
                >
                    <div dangerouslySetInnerHTML={{ __html: name.split(' ').join('<br />') }} />
                </h1>
            </div>
            <IconProdTop color={colorTheme} />
        </div>
    </>

}