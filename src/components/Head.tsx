import { Helmet } from "react-helmet-async"

interface HeadProps {
    title: string
    description: string
    keywords: string
}

const Head = ({ description, keywords, title }: HeadProps) => {
    return (
        <Helmet>
            <title lang='uk'>
                {title}
            </title>
            <meta
                lang='uk'
                name="description"
                content={description}
            />
            <meta
                lang='uk'
                name="keywords"
                content={keywords}
            />
            
        </Helmet>
    )
}

export default Head