import React, { useState, useEffect } from 'react'
import { MyMenu, BannerCat, Cats, Footer, ListProd} from "../../component/index"

export default function Categoria({ slug, prods, allCats, catImg, catName  }) {
    useEffect(() => {
        document.title = `Categoria`
    }, []);
    return <>
        <MyMenu />
        <BannerCat img={catImg} name={catName} />
        <ListProd prods={prods} />
        <Cats categories={allCats} />
        <Footer />
    </>
}

export async function getServerSideProps(context) {

    let base = "http://wpnext.con/wp-json/wc/v3"
    let jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93cG5leHQuY29uIiwiaWF0IjoxNjUxMDAzMDk0LCJuYmYiOjE2NTEwMDMwOTQsImV4cCI6MTY1MTYwNzg5NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.-RDZeXflgeUsXTK2e-BRYKXQXcUfYboqWFte-JDKrlY'
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${jwt}`)
    let info = { headers }

    let slug = context.query.slug

    let reqCast = await fetch(`${base}/products/categories?slug=${slug}`, info)
    let cat = await reqCast.json()
    let catID = cat[0].id

    let reqProds = await fetch(`${base}/products/?category=${catID}`, info)
    let prods = await reqProds.json()
    prods = prods.map(p => ({
        name: p.name,
        slug: p.slug,
        id: p.id,
        image: p.images[0].src
    }))

    let reqAllCats = await fetch(`${base}/products/categories`, info)
    let allCats = await reqAllCats.json()
    allCats = allCats.map(c => ({
        name: c.name,
        slug: c.slug,
        id: c.id,
        image: c.image?.src || null
    })).filter(c => c.image)

    return {
        props: {
            slug,
            catID,
            catImg: cat[0].image.src,
            catName: cat[0].name,
            prods,
            allCats
        },
    }
}